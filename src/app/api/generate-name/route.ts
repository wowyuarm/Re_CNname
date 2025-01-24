/**
 * @fileoverview 生成中文名字的API路由处理器
 */
import { NextResponse } from 'next/server'
import { ZhipuAI } from 'zhipuai'
import { userInfoSchema } from '@/lib/validations'
import type { GeneratedName } from '@/types/api'

const client = new ZhipuAI({
  apiKey: process.env.ZHIPUAI_API_KEY!,
})

export async function POST(request: Request) {
  try {
    // 解析请求体
    const body = await request.json()
    console.log('Request body:', body)

    // 验证用户输入
    const { userInfo, answers } = body
    const validatedUserInfo = userInfoSchema.parse(userInfo)
    console.log('Validated user info:', validatedUserInfo)
    console.log('User answers:', answers)

    const prompt = `Generate a meaningful Chinese name based on the following information:

User Information:
- English Name: ${validatedUserInfo.englishName}
- Gender: ${validatedUserInfo.gender}
- Interests: ${validatedUserInfo.interests}
- Personality: ${validatedUserInfo.personality}

User Preferences (from questions):
${Object.entries(answers)
  .map(([questionId, answerId]) => `- Question ${questionId}: Answer ${answerId}`)
  .join('\n')}

Important: Return ONLY a valid JSON object, with no additional text or formatting. The response should be in this exact format:
{
  "chineseName": "张天明",
  "pinyin": "Zhāng Tiān Míng",
  "meaning": "The name means...",
  "culturalBackground": "This name draws inspiration from...",
  "characters": [
    {
      "character": "张",
      "pinyin": "Zhāng",
      "meaning": "To spread out, a common surname..."
    }
  ]
}`

    console.log('Sending prompt to AI:', prompt)

    // 调用AI API
    const completion = await client.chat.completions.create({
      model: process.env.ZHIPUAI_MODEL!,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const aiResponse = completion.choices[0].message.content
    console.log('AI response:', aiResponse)

    // 尝试解析AI响应
    let generatedName: GeneratedName
    try {
      // 清理响应文本，确保它是有效的JSON
      const cleanedResponse = aiResponse?.replace(/```json\n|\n```/g, '').trim() || '{}'
      generatedName = JSON.parse(cleanedResponse) as GeneratedName
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError)
      console.error('Raw AI response:', aiResponse)
      return NextResponse.json(
        { message: 'Invalid response from AI service' },
        { status: 500 }
      )
    }

    // 验证名字格式
    if (!generatedName.chineseName || !generatedName.pinyin || !generatedName.characters) {
      console.error('Invalid name format:', generatedName)
      return NextResponse.json(
        { message: 'Invalid name format from AI service' },
        { status: 500 }
      )
    }

    return NextResponse.json({ name: generatedName })
  } catch (error) {
    console.error('Error in generate-name:', error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Failed to generate name' },
      { status: 500 }
    )
  }
} 
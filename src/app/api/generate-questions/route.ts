/**
 * @fileoverview 生成问题的API路由处理器
 */
import { NextResponse } from 'next/server'
import { ZhipuAI } from 'zhipuai'
import { userInfoSchema } from '@/lib/validations'
import type { Question } from '@/types/api'

const client = new ZhipuAI({
  apiKey: process.env.ZHIPUAI_API_KEY!,
})

export async function POST(request: Request) {
  try {
    // 解析请求体
    const body = await request.json()
    console.log('Request body:', body)

    // 验证用户输入
    const userInfo = userInfoSchema.parse(body)
    console.log('Validated user info:', userInfo)

    const prompt = `Generate 5 personalized questions in English to help create a meaningful Chinese name for a person with the following characteristics:
- English Name: ${userInfo.englishName}
- Gender: ${userInfo.gender}
- Interests: ${userInfo.interests}
- Personality: ${userInfo.personality}

Each question should have 3-4 options. The questions should help understand the person's preferences for their Chinese name, such as their preference for traditional vs modern names, the desired meaning or elements to be included, etc.

Important: Return ONLY a valid JSON array of questions, with no additional text or formatting. The response should be in this exact format:
[
  {
    "id": "q1",
    "text": "What style of Chinese name would you prefer?",
    "options": [
      {
        "id": "q1_a",
        "text": "Traditional",
        "description": "Names with deep cultural roots and classical meanings"
      }
    ]
  }
]`

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
    let questions: Question[]
    try {
      // 清理响应文本，确保它是有效的JSON
      const cleanedResponse = aiResponse?.replace(/```json\n|\n```/g, '').trim() || '[]'
      questions = JSON.parse(cleanedResponse) as Question[]
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError)
      console.error('Raw AI response:', aiResponse)
      return NextResponse.json(
        { message: 'Invalid response from AI service' },
        { status: 500 }
      )
    }

    // 验证问题格式
    if (!Array.isArray(questions) || questions.length === 0) {
      console.error('Invalid questions format:', questions)
      return NextResponse.json(
        { message: 'Invalid questions format from AI service' },
        { status: 500 }
      )
    }

    return NextResponse.json({ questions })
  } catch (error) {
    console.error('Error in generate-questions:', error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Failed to generate questions' },
      { status: 500 }
    )
  }
} 
/**
 * @fileoverview API调用模块，处理与后端的通信
 */
import type { UserInfoFormData } from './validations'
import type { Question, GeneratedName } from '@/types/api'

/**
 * 获取API基础URL
 */
function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL
  }
  // 在生产环境中使用相对路径
  return '/api'
}

/**
 * 生成个性化问题
 * @param userInfo - 用户基本信息
 * @returns 返回生成的问题列表
 */
export async function generateQuestions(
  userInfo: UserInfoFormData
): Promise<{ questions: Question[] }> {
  const response = await fetch(`${getBaseUrl()}/generate-questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to generate questions')
  }

  return response.json()
}

/**
 * 生成中文名字
 * @param userInfo - 用户基本信息
 * @param answers - 用户对问题的回答
 * @returns 返回生成的中文名字及相关信息
 */
export async function generateName(
  userInfo: UserInfoFormData,
  answers: Record<string, string>
): Promise<{ name: GeneratedName }> {
  const response = await fetch(`${getBaseUrl()}/generate-name`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userInfo,
      answers,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to generate name')
  }

  return response.json()
} 
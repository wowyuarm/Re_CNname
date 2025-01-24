/**
 * @fileoverview 主页组件，用于展示用户输入表单和问题列表
 */
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Layout from '@/components/Layout'
import FormInput from '@/components/FormInput'
import QuestionList from '@/components/QuestionList'
import LoadingSpinner from '@/components/LoadingSpinner'
import ErrorMessage from '@/components/ErrorMessage'
import { userInfoSchema, type UserInfoFormData } from '@/lib/validations'
import { generateQuestions, generateName } from '@/lib/api'
import type { Question, GeneratedName } from '@/types/api'

export default function Home() {
  const [step, setStep] = useState<'form' | 'questions' | 'result'>('form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [generatedName, setGeneratedName] = useState<GeneratedName | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<UserInfoFormData>({
    resolver: zodResolver(userInfoSchema)
  })

  const handleAnswerChange = (questionId: string, answerId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }))
  }

  const onSubmitUserInfo = async (data: UserInfoFormData) => {
    setLoading(true)
    setError(null)

    try {
      const response = await generateQuestions(data)
      setQuestions(response.questions)
      setStep('questions')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleQuestionsSubmit = async () => {
    if (Object.keys(answers).length !== questions.length) {
      setError('Please answer all questions')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const formData = await new Promise<UserInfoFormData>((resolve) => {
        handleSubmit((data) => resolve(data))()
      })

      const response = await generateName(formData, answers)
      setGeneratedName(response.name)
      setStep('result')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleStartOver = () => {
    setStep('form')
    reset()
    setQuestions([])
    setAnswers({})
    setGeneratedName(null)
    setError(null)
  }

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          {error && <ErrorMessage message={error} className="mb-6" />}

          {step === 'form' && (
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Create Your Chinese Name
              </h1>
              <form className="space-y-8" onSubmit={handleSubmit(onSubmitUserInfo)}>
                <FormInput
                  label="English Name"
                  error={errors.englishName?.message}
                  {...register('englishName')}
                  placeholder="Enter your English name"
                  className="h-14 text-lg"
                />

                <div className="space-y-4">
                  <label className="block text-lg font-medium text-gray-700">
                    Gender
                  </label>
                  <div className="flex items-center space-x-8">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="male"
                        {...register('gender')}
                        className="w-6 h-6 text-blue-900 border-gray-300 focus:ring-blue-900"
                      />
                      <span className="ml-3 text-lg text-gray-700">Male</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="female"
                        {...register('gender')}
                        className="w-6 h-6 text-blue-900 border-gray-300 focus:ring-blue-900"
                      />
                      <span className="ml-3 text-lg text-gray-700">Female</span>
                    </label>
                  </div>
                  {errors.gender && (
                    <p className="mt-2 text-sm text-red-600">{errors.gender.message}</p>
                  )}
                </div>

                <FormInput
                  label="Interests & Hobbies"
                  type="textarea"
                  error={errors.interests?.message}
                  {...register('interests')}
                  placeholder="Tell us about your interests and hobbies"
                  className="min-h-[160px] text-lg p-4"
                />

                <FormInput
                  label="Personality Traits"
                  type="textarea"
                  error={errors.personality?.message}
                  {...register('personality')}
                  placeholder="Describe your personality"
                  className="min-h-[160px] text-lg p-4"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-4 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <LoadingSpinner size="sm" className="mr-3" />
                      <span>Generating Questions...</span>
                    </div>
                  ) : (
                    'Continue'
                  )}
                </button>
              </form>
            </div>
          )}

          {step === 'questions' && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Help Us Understand Your Preferences
              </h2>
              <QuestionList
                questions={questions}
                answers={answers}
                onAnswerChange={handleAnswerChange}
              />
              <div className="mt-8">
                <button
                  onClick={handleQuestionsSubmit}
                  disabled={loading || Object.keys(answers).length !== questions.length}
                  className={`btn-primary ${
                    loading || Object.keys(answers).length !== questions.length
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <LoadingSpinner size="sm" className="mr-2" />
                      <span>Generating Name...</span>
                    </div>
                  ) : (
                    'Generate My Chinese Name'
                  )}
                </button>
              </div>
            </div>
          )}

          {step === 'result' && generatedName && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Your Chinese Name
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-center mb-2">
                    {generatedName.chineseName}
                  </h3>
                  <p className="text-lg text-center text-gray-600">
                    {generatedName.pinyin}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Meaning</h4>
                  <p className="text-gray-700">{generatedName.meaning}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Cultural Background</h4>
                  <p className="text-gray-700">{generatedName.culturalBackground}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Character Analysis</h4>
                  <div className="space-y-4">
                    {generatedName.characters.map((char) => (
                      <div key={char.character} className="flex items-center space-x-4">
                        <span className="text-2xl font-bold">{char.character}</span>
                        <div>
                          <p className="text-sm text-gray-600">{char.pinyin}</p>
                          <p className="text-gray-700">{char.meaning}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={handleStartOver}
                  className="btn-primary mt-8"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
} 
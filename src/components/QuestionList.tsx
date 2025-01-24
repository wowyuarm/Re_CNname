/**
 * @fileoverview 问题列表组件，用于展示问题和选项
 */
import type { Question } from '@/types/api'

interface QuestionListProps {
  questions: Question[]
  answers: Record<string, string>
  onAnswerChange: (questionId: string, answerId: string) => void
}

export default function QuestionList({
  questions,
  answers,
  onAnswerChange
}: QuestionListProps) {
  return (
    <div className="space-y-8">
      {questions.map((question) => (
        <div key={question.id} className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {question.text}
          </h3>
          <div className="space-y-4">
            {question.options.map((option) => (
              <label
                key={option.id}
                className={`
                  flex items-center p-4 border rounded-lg cursor-pointer
                  transition-colors duration-200
                  ${
                    answers[question.id] === option.id
                      ? 'bg-primary-50 border-primary'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }
                `}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.id}
                  checked={answers[question.id] === option.id}
                  onChange={() => onAnswerChange(question.id, option.id)}
                  className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {option.text}
                  </p>
                  {option.description && (
                    <p className="mt-1 text-sm text-gray-500">
                      {option.description}
                    </p>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 
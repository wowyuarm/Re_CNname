/**
 * @fileoverview 表单输入组件，支持文本输入和文本区域
 */
import { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  type?: 'text' | 'textarea';
}

const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  ({ label, error, type = 'text', className = '', ...props }, ref) => {
    const inputClasses = `block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900 ${
      error ? 'border-red-300' : ''
    } ${className}`;

    return (
      <div className="space-y-2">
        <label className="block text-lg font-medium text-gray-700">
          {label}
        </label>
        {type === 'textarea' ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={inputClasses}
            {...props}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            className={inputClasses}
            {...props}
          />
        )}
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput; 
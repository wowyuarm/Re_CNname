/**
 * @fileoverview 表单验证模块，定义表单验证规则和类型
 */
import { z } from 'zod';

export const userInfoSchema = z.object({
  englishName: z
    .string()
    .min(1, 'English name is required')
    .max(50, 'English name must be less than 50 characters'),
  gender: z.enum(['male', 'female'], {
    required_error: 'Please select your gender',
  }),
  interests: z
    .string()
    .min(1, 'Please tell us about your interests')
    .max(500, 'Interests must be less than 500 characters'),
  personality: z
    .string()
    .min(1, 'Please describe your personality')
    .max(500, 'Personality description must be less than 500 characters'),
});

export type UserInfoFormData = z.infer<typeof userInfoSchema>;

export const answersSchema = z.record(z.string(), z.string()); 
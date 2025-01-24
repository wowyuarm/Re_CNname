/**
 * @fileoverview API类型定义，包含问题、选项和生成名字的相关类型
 */

/**
 * 问题选项类型
 */
export interface Option {
  id: string;
  text: string;
  description?: string;
}

/**
 * 问题类型
 */
export interface Question {
  id: string;
  text: string;
  options: Option[];
}

/**
 * 生成的中文名字的字符分析
 */
export interface Character {
  character: string;
  pinyin: string;
  meaning: string;
}

/**
 * 生成的中文名字及相关信息
 */
export interface GeneratedName {
  chineseName: string;
  pinyin: string;
  meaning: string;
  culturalBackground: string;
  characters: Character[];
}

export interface QuestionsResponse {
  questions: Question[];
}

export interface NameResponse {
  name: GeneratedName;
}

export interface ErrorResponse {
  error: string;
} 
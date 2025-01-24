/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ZHIPUAI_API_KEY: process.env.ZHIPUAI_API_KEY,
    ZHIPUAI_MODEL: process.env.ZHIPUAI_MODEL || 'glm-4',
  },
} 
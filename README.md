# Chinese Name Generator

一个帮助国外用户生成个性化中文名字的网站。

## 功能特点

- 收集用户基本信息（英文名、性别、兴趣爱好、性格特点）
- 生成个性化问题，帮助了解用户偏好
- 基于用户信息和回答生成有意义的中文名字
- 提供名字的详细解释，包括拼音、含义和文化背景
- 响应式设计，支持移动端和桌面端访问

## 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **状态管理**: React Hooks
- **表单处理**: React Hook Form
- **表单验证**: Zod
- **API调用**: 智谱AI GLM-4
- **部署**: Vercel

## 开发环境设置

1. 克隆仓库：
   ```bash
   git clone <repository-url>
   cd chinese-name-generator
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 配置环境变量：
   创建 `.env.local` 文件并添加以下内容：
   ```
   ZHIPUAI_API_KEY=your_api_key_here
   ZHIPUAI_MODEL=glm-4-flash
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

4. 启动开发服务器：
   ```bash
   npm run dev
   ```

5. 访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
src/
  ├── app/              # Next.js 应用路由
  ├── components/       # React 组件
  ├── lib/             # 工具函数和验证
  ├── types/           # TypeScript 类型定义
  └── styles/          # 全局样式
```

## API 接口

### 生成问题

- **端点**: `/api/generate-questions`
- **方法**: POST
- **请求体**:
  ```typescript
  {
    englishName: string;
    gender: 'male' | 'female';
    interests: string;
    personality: string;
  }
  ```

### 生成名字

- **端点**: `/api/generate-name`
- **方法**: POST
- **请求体**:
  ```typescript
  {
    englishName: string;
    gender: 'male' | 'female';
    interests: string;
    personality: string;
    answers: Record<string, string>;
  }
  ```

## 部署

项目使用 Vercel 进行部署。每次推送到主分支时会自动部署。

## 贡献

欢迎提交 Pull Request 和 Issue。

## 许可证

MIT 
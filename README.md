# AI Notes

A modern, AI-powered note-taking application built with Next.js, TypeScript, and Supabase. Create, manage, and enhance your notes with intelligent AI assistance.

## Features

- 🔐 **Secure Authentication** - User registration and login powered by Supabase Auth
- 📝 **Note Management** - Create, read, update, and delete personal notes
- 🤖 **AI Integration** - Enhance your notes with OpenAI-powered suggestions and improvements
- 🌓 **Dark Mode Support** - Toggle between light and dark themes
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🔍 **Smart Search** - Fuzzy search through your notes with Fuse.js
- ⚡ **Real-time Updates** - Instant UI updates with optimistic rendering

## Tech Stack

- **Frontend**: Next.js 15.4, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Supabase Auth
- **AI**: OpenAI API
- **State Management**: React Context API
- **UI Components**: shadcn/ui

## Prerequisites

- Node.js 18+
- PostgreSQL database
- Supabase account
- OpenAI API key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tarek-gritli/ai-notes.git
   cd ai-notes
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DB_URL="your-postgresql-connection-string"

   # Supabase
   SUPABASE_URL="your-supabase-url"
   SUPABASE_ANON_KEY="your-supabase-anon-key"

   # OpenAI
   OPENAI_API_KEY="your-openai-api-key"
   ```

4. Set up the database:

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## Key Features

### Authentication

- Email-based registration and login
- Session management with Supabase
- Protected routes with middleware

### Note Management

- Create new notes with a single click
- Edit notes in real-time
- Delete notes with confirmation dialog
- Automatic saving

### AI Assistant

- "Ask AI" button for intelligent note suggestions
- Powered by OpenAI's GPT models
- Context-aware improvements

### User Interface

- Clean, modern design with shadcn/ui components
- Responsive sidebar navigation
- Toast notifications for user feedback
- Skeleton loading states

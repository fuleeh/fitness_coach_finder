# Fitness Coach Finder

A Vue 3 application for discovering and connecting with fitness coaches. Browse coaches by specialty, view profiles, and send contact requests.

## Features

- **Coach Discovery** - Browse fitness coaches with filtering by specialty
- **Coach Profiles** - View detailed information about each coach
- **Contact System** - Send messages to coaches directly
- **Coach Registration** - Fitness professionals can register as coaches
- **Request Management** - View incoming contact requests
- **User Authentication** - Login/signup system with session persistence

### Specialties
Powerlifting, Bodybuilding, Fitness, Yoga, Strength, Nutrition

## Tech Stack

- **Vue 3** with Composition API (`<script setup>`)
- **TypeScript** for type safety
- **Pinia** for state management
- **Vue Router** for navigation
- **Vite** for build tooling

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Demo Account

- Email: `demo@fitcoach.com`
- Password: `demo123`

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── coaches/      # Coach-related components
│   ├── layout/       # Layout components
│   ├── requests/     # Request-related components
│   └── ui/           # Base UI components
├── pages/            # Route pages
├── stores/           # Pinia stores
│   ├── auth.ts       # Authentication state
│   ├── coaches.ts    # Coaches data
│   └── requests.ts  # Contact requests
├── router.ts         # Route configuration
└── main.ts           # App entry point
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home (redirects to coaches) |
| `/coaches` | Browse all coaches |
| `/coaches/:id` | Coach profile |
| `/contact/:coachId` | Contact coach form |
| `/register` | Register as coach |
| `/requests` | View contact requests |
| `/auth` | Login/Signup |
| `/*` | 404 Not Found |

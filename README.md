# Fitness Coach Finder

A Nuxt 3 application for discovering and connecting with fitness coaches. Browse coaches by specialty, view profiles, and send contact requests.

## Features

- **Coach Discovery** - Browse fitness coaches with filtering by specialty
- **Coach Profiles** - View detailed information about each coach
- **Contact System** - Send messages to coaches directly
- **Coach Registration** - Fitness professionals can register as coaches
- **Request Management** - View incoming contact requests
- **User Authentication** - Login/signup system with session persistence
- **SSR Support** - Server-side rendering for better performance and SEO

### Specialties

Powerlifting, Bodybuilding, Fitness, Yoga, Strength, Nutrition

## Tech Stack

- **Nuxt 3** with Vue 3 Composition API
- **TypeScript** for type safety
- **Pinia** for state management
- **Vue Router** (built-in with file-based routing)
- **Nitro** server engine

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

# Generate static site
npm run generate
```

## Demo Account

- Email: `demo@fitcoach.com`
- Password: `demo123`

## Project Structure

```
fitness-coach-finder/
├── app.vue               # App entry point
├── nuxt.config.ts        # Nuxt configuration
├── layouts/
│   └── default.vue       # Main layout with header
├── pages/                # File-based routing
│   ├── index.vue         # → /
│   ├── coaches/
│   │   ├── index.vue     # → /coaches
│   │   └── [id].vue     # → /coaches/:id
│   ├── contact/
│   │   └── [coachId].vue # → /contact/:coachId
│   ├── auth.vue          # → /auth
│   ├── register.vue      # → /register
│   ├── requests.vue      # → /requests
│   └── [...404].vue      # → 404
├── components/           # Auto-imported components
│   ├── coaches/
│   ├── layout/
│   ├── requests/
│   └── ui/
├── stores/               # Pinia stores
│   ├── auth.ts
│   ├── coaches.ts
│   └── requests.ts
├── middleware/           # Route middleware
│   └── auth.ts
├── plugins/              # Client-only plugins
│   └── auth.client.ts
└── assets/
    └── css/
        └── main.css      # Global styles
```

## Nuxt 3 Features Used

- **File-based routing** - Routes auto-generated from pages directory
- **Auto-imports** - Components, composables, and stores auto-imported
- **SSR** - Server-side rendering enabled by default
- **Client plugins** - Auth initialization runs only on client
- **Route middleware** - Auth protection without manual router guards
- **Layouts** - Shared layouts with slot content

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const isLoggedIn = computed(() => authStore.isAuthenticated)

const logout = () => {
  authStore.logout()
  navigateTo('/coaches')
}
</script>

<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink to="/" class="header__logo">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="2" y="10" width="5" height="8" rx="1.5" fill="#3b82f6"/>
          <rect x="8" y="6" width="5" height="16" rx="1.5" fill="#3b82f6"/>
          <rect x="14" y="8" width="5" height="12" rx="1.5" fill="#3b82f6"/>
          <rect x="20" y="11" width="5" height="6" rx="1.5" fill="#3b82f6"/>
        </svg>
        <span>FitCoach</span>
      </NuxtLink>

      <nav class="header__nav">
        <NuxtLink to="/coaches" class="nav-link">Coaches</NuxtLink>

        <template v-if="isLoggedIn">
          <NuxtLink to="/requests" class="nav-link">Requests</NuxtLink>
          <button class="nav-link nav-btn" @click="logout">Logout</button>
        </template>

        <NuxtLink v-else to="/auth" class="nav-cta">Sign In</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(18, 18, 20, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header__container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.875rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  text-decoration: none;
}

.header__logo span {
  font-size: 1.125rem;
  font-weight: 700;
  color: #fafafa;
  letter-spacing: -0.02em;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  padding: 0.5rem 0.875rem;
  color: #a1a1aa;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 8px;
  transition: all 150ms ease;
  text-decoration: none;
}

.nav-link:hover {
  color: #fafafa;
  background: rgba(255, 255, 255, 0.05);
}

.nav-link.router-link-active {
  color: #fafafa;
}

.nav-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 8px;
  text-decoration: none;
  margin-left: 0.5rem;
  transition: background 150ms ease;
}

.nav-cta:hover {
  background: #2563eb;
}
</style>

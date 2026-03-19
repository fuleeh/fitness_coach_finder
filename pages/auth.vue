<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const formIsValid = ref(true)
const isLoading = ref(false)
const error = ref<string | null>(null)
const mode = ref<'login' | 'signup'>('login')

const submitButtonCaption = computed(() => mode.value === 'login' ? 'Sign In' : 'Create Account')
const demoHint = computed(() => mode.value === 'login' ? 'Demo: demo@fitcoach.com / demo123' : '')

const submitForm = async () => {
  if (!email.value || !email.value.includes('@') || password.value.length < 6) {
    formIsValid.value = false
    return
  }

  isLoading.value = true
  error.value = null

  try {
    if (mode.value === 'login') {
      await authStore.login(email.value, password.value)
    } else {
      await authStore.createUser(email.value, password.value)
      await authStore.login(email.value, password.value)
    }
    const redirectUrl = '/' + (route.query.redirect || 'coaches')
    router.replace(redirectUrl)
  } catch (err) {
    error.value = (err as Error).message || 'Authentication failed.'
  }

  isLoading.value = false
}

const switchAuthMode = () => {
  mode.value = mode.value === 'login' ? 'signup' : 'login'
  formIsValid.value = true
  error.value = null
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card">
      <h1>{{ mode === 'login' ? 'Welcome Back' : 'Create Account' }}</h1>
      <p class="subtitle">{{ mode === 'login' ? 'Sign in to continue' : 'Get started with FitCoach' }}</p>

      <div v-if="error" class="error-banner">
        {{ error }}
      </div>

      <div v-if="isLoading" class="loading">
        <div class="spinner"></div>
      </div>

      <form class="auth-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model.trim="email" type="email" placeholder="you@example.com" autocomplete="email" />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" v-model.trim="password" type="password" placeholder="Min. 6 characters" autocomplete="current-password" />
        </div>

        <p v-if="!formIsValid" class="form-error">Enter a valid email and password (min. 6 characters)</p>

        <p v-if="demoHint" class="demo-hint">{{ demoHint }}</p>

        <button type="submit" class="submit-btn" :disabled="isLoading">
          {{ submitButtonCaption }}
        </button>

        <p class="switch-mode">
          {{ mode === 'login' ? 'Need an account?' : 'Already have an account?' }}
          <button type="button" @click="switchAuthMode">
            {{ mode === 'login' ? 'Sign up' : 'Sign in' }}
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
}

.auth-card {
  width: 100%;
  max-width: 380px;
  background: #1a1a1d;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2rem;
}

.auth-card h1 {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
}

.subtitle {
  color: #a1a1aa;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.error-banner {
  background: rgba(239, 68, 68, 0.1);
  color: #f87171;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  margin-bottom: 1rem;
}

.loading {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-group label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #a1a1aa;
}

.form-group input {
  background: #121214;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.625rem 0.875rem;
  color: #fafafa;
  font-size: 0.875rem;
  transition: border-color 150ms ease;
}

.form-group input:focus {
  outline: none;
  border-color: #3b82f6;
}

.form-group input::placeholder {
  color: #71717a;
}

.form-error {
  color: #ef4444;
  font-size: 0.8125rem;
  text-align: center;
  padding: 0.5rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
}

.demo-hint {
  color: #71717a;
  font-size: 0.75rem;
  text-align: center;
  padding: 0.5rem;
  background: #242428;
  border-radius: 8px;
}

.submit-btn {
  padding: 0.75rem 1.25rem;
  background: #3b82f6;
  color: #fff;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 150ms ease;
}

.submit-btn:hover:not(:disabled) {
  background: #2563eb;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.switch-mode {
  text-align: center;
  font-size: 0.8125rem;
  color: #a1a1aa;
  margin-top: 0.5rem;
}

.switch-mode button {
  background: none;
  border: none;
  color: #3b82f6;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  margin-left: 0.25rem;
}

.switch-mode button:hover {
  text-decoration: underline;
}
</style>

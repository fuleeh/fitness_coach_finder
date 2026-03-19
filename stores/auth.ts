import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)
  const userId = ref<string | null>(null)
  const userEmail = ref<string | null>(null)
  const tokenExpiration = ref<number | null>(null)

  const isAuthenticated = computed(() => !!token.value)
  const didAutoLogout = ref(false)

  const mockUserDatabase: Record<string, { password: string; name: string }> = {
    'demo@fitcoach.com': { password: 'demo123', name: 'Demo User' }
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const createUser = async (email: string, password: string) => {
    await delay(1000)

    if (mockUserDatabase[email]) {
      throw new Error('Email already exists')
    }

    mockUserDatabase[email] = { password, name: email.split('@')[0] }
    userEmail.value = email
  }

  const login = async (email: string, password: string) => {
    await delay(1200)

    const user = mockUserDatabase[email]
    if (!user || user.password !== password) {
      throw new Error('Invalid email or password')
    }

    token.value = 'mock-token-' + Date.now()
    userId.value = 'user-' + Date.now()
    userEmail.value = email
    tokenExpiration.value = Date.now() + 24 * 60 * 60 * 1000

    localStorage.setItem('token', token.value)
    localStorage.setItem('userId', userId.value)
    localStorage.setItem('userEmail', email)
    localStorage.setItem('tokenExpiration', String(tokenExpiration.value))
  }

  const logout = () => {
    token.value = null
    userId.value = null
    userEmail.value = null
    tokenExpiration.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('tokenExpiration')
  }

  const autoLogin = () => {
    const storedToken = localStorage.getItem('token')
    const storedUserId = localStorage.getItem('userId')
    const storedUserEmail = localStorage.getItem('userEmail')
    const storedExpiration = localStorage.getItem('tokenExpiration')

    const expirationTime = storedExpiration ? +storedExpiration : 0

    if (expirationTime && expirationTime > Date.now() && storedToken && storedUserId) {
      token.value = storedToken
      userId.value = storedUserId
      userEmail.value = storedUserEmail
      tokenExpiration.value = expirationTime
    } else {
      logout()
    }
  }

  const autoLogout = () => {
    if (tokenExpiration.value && tokenExpiration.value <= Date.now()) {
      didAutoLogout.value = true
      logout()
    }
  }

  return {
    token,
    userId,
    userEmail,
    isAuthenticated,
    didAutoLogout,
    login,
    createUser,
    logout,
    autoLogin,
    autoLogout
  }
})

import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return navigateTo('/auth')
  }

  if (to.meta.requiresUnauth && authStore.isAuthenticated) {
    return navigateTo('/coaches')
  }
})

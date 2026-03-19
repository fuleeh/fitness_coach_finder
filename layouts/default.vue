<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

onMounted(() => {
  authStore.autoLogin()
})
</script>

<template>
  <TheHeader />
  <main>
    <slot />
  </main>
</template>

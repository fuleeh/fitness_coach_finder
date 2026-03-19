<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import TheHeader from '@/components/layout/TheHeader.vue'

const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  authStore.autoLogin()
})

watch(() => authStore.didAutoLogout, (newVal) => {
  if (newVal) {
    router.replace('/coaches')
  }
})
</script>

<template>
  <TheHeader />
  <router-view v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

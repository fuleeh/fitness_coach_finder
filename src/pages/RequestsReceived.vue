<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRequestsStore } from '@/stores/requests'

const requestsStore = useRequestsStore()

const isLoading = ref(false)
const error = ref<string | null>(null)

const receivedRequests = computed(() => requestsStore.getRequests)
const hasRequests = computed(() => requestsStore.hasRequests)

const loadRequests = async () => {
  isLoading.value = true
  error.value = null
  try {
    await requestsStore.fetchRequests()
  } catch (err) {
    error.value = (err as Error).message || 'Failed to load requests'
  }
  isLoading.value = false
}

onMounted(() => {
  loadRequests()
})
</script>

<template>
  <div class="requests-page">
    <div class="requests-page__container">
      <h1>Contact Requests</h1>
      <p class="subtitle">Messages from potential clients</p>

      <div v-if="isLoading" class="loading">
        <div class="spinner"></div>
        <p>Loading requests...</p>
      </div>

      <ul v-else-if="hasRequests" class="requests-list">
        <li v-for="req in receivedRequests" :key="req.id" class="request-item">
          <div class="request-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div class="request-content">
            <p class="email">{{ req.userEmail }}</p>
            <p class="message">{{ req.message }}</p>
          </div>
        </li>
      </ul>

      <div v-else class="empty">
        <p>No requests yet. When clients contact you, their messages will appear here.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.requests-page {
  min-height: calc(100vh - 60px);
  padding: 2rem 1.5rem;
}

.requests-page__container {
  max-width: 650px;
  margin: 0 auto;
}

.requests-page__container h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #a1a1aa;
  font-size: 0.9375rem;
  margin-bottom: 2rem;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 2px solid transparent;
  border-top-color: #10b981;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading p {
  color: #a1a1aa;
  font-size: 0.875rem;
}

.requests-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.request-item {
  display: flex;
  gap: 0.875rem;
  padding: 1rem;
  background: #1a1a1d;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
}

.request-icon {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.request-content {
  flex: 1;
  min-width: 0;
}

.email {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #10b981;
  margin-bottom: 0.25rem;
}

.message {
  font-size: 0.875rem;
  color: #a1a1aa;
  line-height: 1.5;
}

.empty {
  text-align: center;
  padding: 3rem 2rem;
  color: #a1a1aa;
  font-size: 0.9375rem;
}
</style>

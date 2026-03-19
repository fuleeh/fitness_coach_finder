<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useCoachesStore } from '@/stores/coaches'
import { useRequestsStore } from '@/stores/requests'

const props = defineProps<{
  coachId: string
}>()

const router = useRouter()
const authStore = useAuthStore()
const coachesStore = useCoachesStore()
const requestsStore = useRequestsStore()

const coach = computed(() => coachesStore.getCoachById(props.coachId))

const message = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)

const submitForm = async () => {
  if (!authStore.isAuthenticated) {
    router.push('/auth')
    return
  }

  if (!message.value.trim()) {
    return
  }

  isSubmitting.value = true

  await requestsStore.addRequest({
    coachId: props.coachId,
    userEmail: authStore.userEmail || 'anonymous@example.com',
    message: message.value
  })

  isSuccess.value = true
  message.value = ''

  setTimeout(() => {
    router.push('/coaches')
  }, 1500)
}
</script>

<template>
  <div class="contact-page">
    <div class="contact-page__container">
      <button class="back-btn" @click="router.back()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Back
      </button>

      <div class="contact-card">
        <div v-if="isSuccess" class="success-state">
          <div class="success-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h3>Message Sent</h3>
          <p>{{ coach?.firstName }} will get back to you soon.</p>
        </div>

        <template v-else>
          <h2>Contact {{ coach?.firstName }} {{ coach?.lastName }}</h2>
          <p class="subtitle">Send a message to start your fitness journey</p>

          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea
                id="message"
                v-model="message"
                rows="5"
                placeholder="Tell the coach about your goals and experience..."
              ></textarea>
            </div>

            <button type="submit" class="submit-btn" :disabled="isSubmitting || !message.trim()">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  min-height: calc(100vh - 60px);
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: center;
}

.contact-page__container {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  color: #a1a1aa;
  font-weight: 500;
  font-size: 0.8125rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms ease;
  align-self: flex-start;
}

.back-btn:hover {
  background: #242428;
  color: #fafafa;
}

.contact-card {
  background: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 2rem;
}

.contact-card h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fafafa;
  margin-bottom: 0.375rem;
}

.subtitle {
  color: #a1a1aa;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #a1a1aa;
  margin-bottom: 0.5rem;
}

.form-group textarea {
  width: 100%;
  background: #121214;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.875rem 1rem;
  color: #fafafa;
  font-size: 0.9375rem;
  resize: vertical;
  transition: border-color 150ms ease;
}

.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
}

.form-group textarea::placeholder {
  color: #71717a;
}

.submit-btn {
  width: 100%;
  padding: 0.875rem 1.25rem;
  background: #3b82f6;
  color: #fff;
  font-weight: 600;
  font-size: 0.9375rem;
  border: none;
  border-radius: 12px;
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

.success-state {
  text-align: center;
  padding: 2rem 0;
}

.success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.success-state h3 {
  font-size: 1.125rem;
  font-weight: 700;
  color: #fafafa;
  margin-bottom: 0.25rem;
}

.success-state p {
  color: #a1a1aa;
  font-size: 0.9375rem;
}
</style>

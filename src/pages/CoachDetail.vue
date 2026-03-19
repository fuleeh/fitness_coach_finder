<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCoachesStore } from '@/stores/coaches'

const props = defineProps<{
  id: string
}>()

const router = useRouter()
const coachesStore = useCoachesStore()

const coach = computed(() => coachesStore.getCoachById(props.id))

const fullName = computed(() => coach.value ? `${coach.value.firstName} ${coach.value.lastName}` : '')
const areas = computed(() => coach.value?.areas || [])
const rate = computed(() => coach.value?.hourlyRate || 0)
const description = computed(() => coach.value?.description || '')

const getBadgeStyle = (area: string) => {
  switch (area) {
    case 'powerlifting':
      return { bg: 'rgba(249, 115, 22, 0.12)', color: '#f97316' }
    case 'bodybuilding':
      return { bg: 'rgba(168, 85, 247, 0.12)', color: '#a855f7' }
    case 'fitness':
      return { bg: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6' }
    default:
      return { bg: 'rgba(156, 163, 175, 0.12)', color: '#9ca3af' }
  }
}
</script>

<template>
  <div class="coach-detail">
    <div class="coach-detail__container">
      <button class="back-btn" @click="router.back()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Back
      </button>

      <div class="hero-card">
        <div class="avatar">
          {{ coach?.firstName[0] }}{{ coach?.lastName[0] }}
        </div>
        <div class="info">
          <h1>{{ fullName }}</h1>
          <p class="rate">${{ rate }}<span>/hour</span></p>
        </div>
      </div>

      <div class="cta-card">
        <div class="cta-content">
          <h2>Interested?</h2>
          <p>Send a message to {{ coach?.firstName }}</p>
        </div>
        <router-link :to="`/contact/${id}`" class="cta-btn">Contact Coach</router-link>
      </div>

      <div class="about-card">
        <h2>About</h2>
        <div class="badges">
          <span 
            v-for="area in areas" 
            :key="area" 
            class="badge"
            :style="{ backgroundColor: getBadgeStyle(area).bg, color: getBadgeStyle(area).color }"
          >
            {{ area }}
          </span>
        </div>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coach-detail {
  min-height: calc(100vh - 60px);
  padding: 1.5rem;
}

.coach-detail__container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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

.hero-card {
  background: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.75rem;
  color: #fff;
  flex-shrink: 0;
}

.info h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fafafa;
  margin-bottom: 0.375rem;
}

.rate {
  font-size: 1.125rem;
  font-weight: 600;
  color: #3b82f6;
}

.rate span {
  font-weight: 400;
  color: #71717a;
}

.cta-card {
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.cta-content h2 {
  font-size: 1.0625rem;
  font-weight: 600;
  color: #fafafa;
  margin-bottom: 0.25rem;
}

.cta-content p {
  color: #a1a1aa;
  font-size: 0.875rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: #fff;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 12px;
  text-decoration: none;
  transition: background 150ms ease;
  white-space: nowrap;
}

.cta-btn:hover {
  background: #2563eb;
}

.about-card {
  background: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 2rem;
}

.about-card h2 {
  font-size: 1rem;
  font-weight: 600;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.badge {
  display: inline-flex;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: capitalize;
}

.about-card p {
  color: #e4e4e7;
  line-height: 1.8;
  font-size: 1rem;
}

@media (max-width: 640px) {
  .hero-card {
    flex-direction: column;
    text-align: center;
  }

  .cta-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>

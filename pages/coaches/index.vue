<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useCoachesStore } from '~/stores/coaches'
import CoachItem from '~/components/coaches/CoachItem.vue'
import CoachFilter from '~/components/coaches/CoachFilter.vue'

interface Filters {
  powerlifting: boolean
  bodybuilding: boolean
  fitness: boolean
  yoga: boolean
  strength: boolean
  nutrition: boolean
}

const authStore = useAuthStore()
const coachesStore = useCoachesStore()

const isLoading = ref(false)
const error = ref<string | null>(null)
const activeFilters = ref<Filters>({
  powerlifting: true,
  bodybuilding: true,
  fitness: true,
  yoga: true,
  strength: true,
  nutrition: true
})

const isLoggedIn = computed(() => authStore.isAuthenticated)
const isCoach = computed(() => coachesStore.isCoach(authStore.userId || ''))

const filteredCoaches = computed(() => {
  return coachesStore.getCoaches.filter((coach) => {
    if (activeFilters.value.powerlifting && coach.areas.includes('powerlifting')) return true
    if (activeFilters.value.bodybuilding && coach.areas.includes('bodybuilding')) return true
    if (activeFilters.value.fitness && coach.areas.includes('fitness')) return true
    if (activeFilters.value.yoga && coach.areas.includes('yoga')) return true
    if (activeFilters.value.strength && coach.areas.includes('strength')) return true
    if (activeFilters.value.nutrition && coach.areas.includes('nutrition')) return true
    return false
  })
})

const hasCoaches = computed(() => !isLoading.value && coachesStore.hasCoaches)

const setFilters = (filters: Filters) => {
  activeFilters.value = filters
}

const loadCoaches = async (refresh = false) => {
  isLoading.value = true
  error.value = null
  try {
    await coachesStore.loadCoaches({ forceRefresh: refresh })
  } catch (err) {
    error.value = (err as Error).message || 'Failed to load coaches'
  }
  isLoading.value = false
}

const handleError = () => {
  error.value = null
}

onMounted(() => {
  loadCoaches()
})
</script>

<template>
  <div class="coaches-page">
    <div class="coaches-page__container">
      <div v-if="error" class="error-toast">
        <span>{{ error }}</span>
        <button @click="handleError">Dismiss</button>
      </div>

      <CoachFilter @change-filter="setFilters" />

      <div class="coaches-page__actions">
        <NuxtLink v-if="!isLoggedIn" to="/auth?redirect=register" class="btn-primary">
          Login to Register
        </NuxtLink>
        <NuxtLink v-else-if="!isCoach && !isLoading" to="/register" class="btn-primary">
          Register as Coach
        </NuxtLink>
      </div>

      <div v-if="isLoading" class="loading">
        <div class="spinner"></div>
        <p>Loading coaches...</p>
      </div>

      <div v-else-if="hasCoaches" class="coaches-grid">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </div>

      <div v-else class="empty">
        <p>No coaches found matching your filters.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coaches-page {
  min-height: calc(100vh - 60px);
  padding: 1.5rem;
  background: #121214;
}

.coaches-page__container {
  max-width: 1000px;
  margin: 0 auto;
}

.error-toast {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.error-toast span {
  color: #ef4444;
  font-size: 0.875rem;
}

.error-toast button {
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 0.875rem;
  cursor: pointer;
}

.coaches-page__actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  background: #3b82f6;
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 10px;
  text-decoration: none;
  transition: background 150ms ease;
}

.btn-primary:hover {
  background: #2563eb;
}

.coaches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.08);
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading p {
  color: #71717a;
  font-size: 0.9375rem;
}

.empty {
  text-align: center;
  padding: 5rem 2rem;
  color: #71717a;
  font-size: 0.9375rem;
}
</style>

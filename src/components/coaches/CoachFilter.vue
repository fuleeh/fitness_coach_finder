<script setup lang="ts">
import { reactive, watch } from 'vue'

interface Filters {
  powerlifting: boolean
  bodybuilding: boolean
  fitness: boolean
  yoga: boolean
  strength: boolean
  nutrition: boolean
}

const emit = defineEmits<{
  'change-filter': [filters: Filters]
}>()

const filters = reactive<Filters>({
  powerlifting: true,
  bodybuilding: true,
  fitness: true,
  yoga: true,
  strength: true,
  nutrition: true
})

watch(filters, () => {
  emit('change-filter', { ...filters })
}, { deep: true })

const getFilterStyle = (id: string, checked: boolean) => {
  if (!checked) {
    return { bg: 'transparent', border: 'rgba(255,255,255,0.08)', color: '#71717a' }
  }
  switch (id) {
    case 'powerlifting':
      return { bg: 'rgba(249, 115, 22, 0.12)', border: 'rgba(249, 115, 22, 0.25)', color: '#f97316' }
    case 'bodybuilding':
      return { bg: 'rgba(168, 85, 247, 0.12)', border: 'rgba(168, 85, 247, 0.25)', color: '#a855f7' }
    case 'fitness':
      return { bg: 'rgba(59, 130, 246, 0.12)', border: 'rgba(59, 130, 246, 0.25)', color: '#3b82f6' }
    case 'yoga':
      return { bg: 'rgba(34, 197, 94, 0.12)', border: 'rgba(34, 197, 94, 0.25)', color: '#22c55e' }
    case 'strength':
      return { bg: 'rgba(239, 68, 68, 0.12)', border: 'rgba(239, 68, 68, 0.25)', color: '#ef4444' }
    case 'nutrition':
      return { bg: 'rgba(234, 179, 8, 0.12)', border: 'rgba(234, 179, 8, 0.25)', color: '#eab308' }
    default:
      return { bg: 'transparent', border: 'rgba(255,255,255,0.08)', color: '#71717a' }
  }
}
</script>

<template>
  <div class="filter-section">
    <span class="filter-label">Filter</span>
    
    <div class="filter-options">
      <label 
        class="filter-pill"
        :style="{
          backgroundColor: getFilterStyle('powerlifting', filters.powerlifting).bg,
          borderColor: getFilterStyle('powerlifting', filters.powerlifting).border,
          color: getFilterStyle('powerlifting', filters.powerlifting).color
        }"
      >
        <input
          type="checkbox"
          id="powerlifting"
          v-model="filters.powerlifting"
        />
        <span>Powerlifting</span>
      </label>

      <label 
        class="filter-pill"
        :style="{
          backgroundColor: getFilterStyle('bodybuilding', filters.bodybuilding).bg,
          borderColor: getFilterStyle('bodybuilding', filters.bodybuilding).border,
          color: getFilterStyle('bodybuilding', filters.bodybuilding).color
        }"
      >
        <input
          type="checkbox"
          id="bodybuilding"
          v-model="filters.bodybuilding"
        />
        <span>Bodybuilding</span>
      </label>

      <label 
        class="filter-pill"
        :style="{
          backgroundColor: getFilterStyle('fitness', filters.fitness).bg,
          borderColor: getFilterStyle('fitness', filters.fitness).border,
          color: getFilterStyle('fitness', filters.fitness).color
        }"
      >
        <input
          type="checkbox"
          id="fitness"
          v-model="filters.fitness"
        />
        <span>Fitness</span>
      </label>

      <label 
        class="filter-pill"
        :style="{
          backgroundColor: getFilterStyle('yoga', filters.yoga).bg,
          borderColor: getFilterStyle('yoga', filters.yoga).border,
          color: getFilterStyle('yoga', filters.yoga).color
        }"
      >
        <input
          type="checkbox"
          id="yoga"
          v-model="filters.yoga"
        />
        <span>Yoga</span>
      </label>

      <label 
        class="filter-pill"
        :style="{
          backgroundColor: getFilterStyle('strength', filters.strength).bg,
          borderColor: getFilterStyle('strength', filters.strength).border,
          color: getFilterStyle('strength', filters.strength).color
        }"
      >
        <input
          type="checkbox"
          id="strength"
          v-model="filters.strength"
        />
        <span>Strength</span>
      </label>

      <label 
        class="filter-pill"
        :style="{
          backgroundColor: getFilterStyle('nutrition', filters.nutrition).bg,
          borderColor: getFilterStyle('nutrition', filters.nutrition).border,
          color: getFilterStyle('nutrition', filters.nutrition).color
        }"
      >
        <input
          type="checkbox"
          id="nutrition"
          v-model="filters.nutrition"
        />
        <span>Nutrition</span>
      </label>
    </div>
  </div>
</template>

<style scoped>
.filter-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 2rem;
}

.filter-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: #52525b;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 150ms ease;
}

.filter-pill:hover {
  filter: brightness(1.1);
}

.filter-pill input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
</style>

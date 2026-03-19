<script setup lang="ts">
interface Props {
  id: string
  firstName: string
  lastName: string
  rate: number
  areas: string[]
}

const props = defineProps<Props>()

const fullName = `${props.firstName} ${props.lastName}`

const getBadgeStyle = (area: string) => {
  switch (area) {
    case 'powerlifting':
      return { bg: 'rgba(249, 115, 22, 0.1)', color: '#f97316', border: 'rgba(249, 115, 22, 0.2)' }
    case 'bodybuilding':
      return { bg: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', border: 'rgba(168, 85, 247, 0.2)' }
    case 'fitness':
      return { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: 'rgba(59, 130, 246, 0.2)' }
    case 'yoga':
      return { bg: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: 'rgba(34, 197, 94, 0.2)' }
    case 'strength':
      return { bg: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'rgba(239, 68, 68, 0.2)' }
    case 'nutrition':
      return { bg: 'rgba(234, 179, 8, 0.1)', color: '#eab308', border: 'rgba(234, 179, 8, 0.2)' }
    default:
      return { bg: 'rgba(156, 163, 175, 0.1)', color: '#9ca3af', border: 'rgba(156, 163, 175, 0.2)' }
  }
}
</script>

<template>
  <li class="coach-card">
    <div class="coach-card__avatar">
      {{ firstName[0] }}{{ lastName[0] }}
    </div>
    
    <div class="coach-card__content">
      <h3 class="coach-card__name">{{ fullName }}</h3>
      <p class="coach-card__rate">${{ rate }}<span>/hr</span></p>
    </div>
    
    <div class="coach-card__badges">
      <span 
        v-for="area in areas" 
        :key="area" 
        class="badge"
        :style="{ 
          backgroundColor: getBadgeStyle(area).bg,
          color: getBadgeStyle(area).color,
          borderColor: getBadgeStyle(area).border
        }"
      >
        {{ area }}
      </span>
    </div>
    
    <div class="coach-card__actions">
      <NuxtLink :to="`/contact/${id}`" class="btn btn--outline">
        Contact
      </NuxtLink>
      <NuxtLink :to="`/coaches/${id}`" class="btn btn--primary">
        View Profile
      </NuxtLink>
    </div>
  </li>
</template>

<style scoped>
.coach-card {
  background: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  transition: all 200ms ease;
  min-height: 320px;
}

.coach-card:hover {
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.coach-card__avatar {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  flex-shrink: 0;
}

.coach-card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
}

.coach-card__name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fafafa;
  margin: 0;
}

.coach-card__rate {
  font-size: 1.125rem;
  font-weight: 600;
  color: #3b82f6;
  margin: 0;
}

.coach-card__rate span {
  font-weight: 400;
  color: #71717a;
}

.coach-card__badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
  border: 1px solid;
  letter-spacing: 0.02em;
}

.coach-card__actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
  width: 100%;
  margin-top: auto;
  padding-top: 0.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 14px;
  text-decoration: none;
  transition: all 150ms ease;
}

.btn--primary {
  background: #3b82f6;
  color: #fff;
}

.btn--primary:hover {
  background: #2563eb;
}

.btn--outline {
  background: transparent;
  color: #3b82f6;
  border: 1.5px solid rgba(59, 130, 246, 0.4);
}

.btn--outline:hover {
  background: rgba(59, 130, 246, 0.1);
  border-color: #3b82f6;
}
</style>

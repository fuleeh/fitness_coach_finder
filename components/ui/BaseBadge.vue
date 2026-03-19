<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type: 'powerlifting' | 'bodybuilding' | 'fitness'
}

const props = defineProps<Props>()

const badgeStyle = computed(() => {
  switch (props.type) {
    case 'powerlifting':
      return { background: 'rgba(239, 68, 68, 0.12)', color: '#f87171', border: '1px solid rgba(239, 68, 68, 0.2)' }
    case 'bodybuilding':
      return { background: 'rgba(168, 85, 247, 0.12)', color: '#c084fc', border: '1px solid rgba(168, 85, 247, 0.2)' }
    case 'fitness':
      return { background: 'rgba(16, 185, 129, 0.12)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }
    default:
      return { background: '#242428', color: '#a1a1aa', border: '1px solid rgba(255,255,255,0.08)' }
  }
})
</script>

<template>
  <span class="badge" :style="badgeStyle">
    <slot>{{ type }}</slot>
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.625rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
}
</style>

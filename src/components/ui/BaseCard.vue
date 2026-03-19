<script setup lang="ts">
interface Props {
  variant?: 'default' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md'
})
</script>

<template>
  <div :class="['card', `card--${variant}`, `card--padding-${padding}`]">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition-fast);
}

.card--elevated {
  background: var(--bg-elevated);
  box-shadow: var(--shadow-md);
}

.card--padding-none {
  padding: 0;
}

.card--padding-sm {
  padding: 0.75rem;
}

.card--padding-md {
  padding: 1.25rem;
}

.card--padding-lg {
  padding: 1.5rem;
}
</style>

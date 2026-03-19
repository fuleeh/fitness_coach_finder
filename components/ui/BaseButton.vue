<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  to: '',
  type: 'button',
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const isLink = computed(() => !!props.to)

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <router-link v-if="isLink" :to="to" class="btn" :class="[`btn--${variant}`, `btn--${size}`]">
    <slot />
  </router-link>
  <button v-else :type="type" :disabled="disabled" class="btn" :class="[`btn--${variant}`, `btn--${size}`]" @click="handleClick">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms ease;
  text-decoration: none;
  padding: 0.5rem 0.875rem;
  font-size: 0.8125rem;
  background: #10b981;
  color: #000;
}

.btn--primary {
  background: #10b981;
  color: #000;
}

.btn--primary:hover {
  background: #059669;
}

.btn--secondary {
  background: #242428;
  color: #fafafa;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.btn--secondary:hover {
  background: #2a2a2e;
}

.btn--ghost {
  background: transparent;
  color: #a1a1aa;
}

.btn--ghost:hover {
  background: #242428;
  color: #fafafa;
}

.btn--sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
}

.btn--md {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn--lg {
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

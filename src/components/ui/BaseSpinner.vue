<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
})

const sizeClass = computed(() => `spinner--${props.size}`)
</script>

<template>
  <div :class="['spinner', sizeClass]">
    <div class="spinner__ring"></div>
    <div class="spinner__ring"></div>
    <div class="spinner__ring"></div>
  </div>
</template>

<style scoped>
.spinner {
  display: inline-block;
  position: relative;
  width: var(--spinner-size, 32px);
  height: var(--spinner-size, 32px);
}

.spinner--sm {
  --spinner-size: 20px;
}

.spinner--md {
  --spinner-size: 32px;
}

.spinner--lg {
  --spinner-size: 48px;
}

.spinner__ring {
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.spinner__ring:nth-child(1) {
  animation-delay: -0.2s;
}

.spinner__ring:nth-child(2) {
  animation-delay: -0.1s;
  inset: 4px;
}

.spinner__ring:nth-child(3) {
  inset: 8px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

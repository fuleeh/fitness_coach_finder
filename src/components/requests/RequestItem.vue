<script setup lang="ts">
interface Props {
  email: string
  message: string
}

defineProps<Props>()
</script>

<template>
  <li class="request-item">
    <div class="request-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    </div>
    <div class="request-content">
      <p class="email">{{ email }}</p>
      <p class="message">{{ message }}</p>
    </div>
  </li>
</template>

<style scoped>
.request-item {
  display: flex;
  gap: 0.875rem;
  padding: 1rem;
  background: #121214;
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
</style>

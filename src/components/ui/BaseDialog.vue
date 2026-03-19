<script setup lang="ts">
import { watch, onMounted, onUnmounted } from 'vue'

interface Props {
  show: boolean
  title?: string
  fixed?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  fixed: false
})

const emit = defineEmits<{
  close: []
}>()

const handleBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget && !props.fixed) {
    emit('close')
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.show && !props.fixed) {
    emit('close')
  }
}

watch(() => props.show, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : ''
})

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="show" class="dialog-backdrop" @click="handleBackdropClick">
        <div class="dialog">
          <header class="dialog__header">
            <h2>{{ title }}</h2>
            <button v-if="!fixed" class="dialog__close" @click="emit('close')">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </header>
          <div class="dialog__content">
            <slot />
          </div>
          <div v-if="$slots.actions || !fixed" class="dialog__actions">
            <slot name="actions">
              <BaseButton variant="secondary" @click="emit('close')">Close</BaseButton>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.dialog-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.dialog {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  width: 100%;
  max-width: 24rem;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dialog__header {
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
}

.dialog__header h2 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
}

.dialog__close {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.dialog__close:hover {
  color: var(--text-primary);
  background: var(--bg-elevated);
}

.dialog__content {
  padding: 1.25rem;
  overflow-y: auto;
  flex: 1;
}

.dialog__actions {
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  border-top: 1px solid var(--border);
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.2s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}

.dialog-enter-from .dialog,
.dialog-leave-to .dialog {
  transform: scale(0.95);
}
</style>

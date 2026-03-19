<script setup lang="ts">
import CoachForm from '@/components/coaches/CoachForm.vue'
</script>

<template>
  <div class="registration-page">
    <div class="registration-page__container">
      <h1>Become a Coach</h1>
      <p class="subtitle">Join our community of fitness professionals</p>

      <div class="form-card">
        <CoachForm />
      </div>
    </div>
  </div>
</template>

<style scoped>
.registration-page {
  min-height: calc(100vh - 60px);
  padding: 2rem 1.5rem;
}

.registration-page__container {
  max-width: 550px;
  margin: 0 auto;
}

.registration-page__container h1 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #a1a1aa;
  font-size: 0.9375rem;
  margin-bottom: 2rem;
}

.form-card {
  background: #1a1a1d;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
}
</style>

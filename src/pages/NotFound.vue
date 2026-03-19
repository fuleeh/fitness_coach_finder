<script setup lang="ts">
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page not found</p>
    <router-link to="/coaches" class="back-link">Back to Home</router-link>
  </div>
</template>

<style scoped>
.not-found {
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.not-found h1 {
  font-size: 4rem;
  font-weight: 700;
  color: #71717a;
  margin-bottom: 0.5rem;
}

.not-found p {
  color: #a1a1aa;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  background: #10b981;
  color: #000;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 8px;
  transition: background 150ms ease;
}

.back-link:hover {
  background: #059669;
}
</style>

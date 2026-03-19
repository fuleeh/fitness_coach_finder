<script setup lang="ts">
import { useCoachesStore, type CoachFormData } from '~/stores/coaches'
import { useAuthStore } from '~/stores/auth'

const coachesStore = useCoachesStore()
const authStore = useAuthStore()

const firstName = reactive({ val: '', isValid: true })
const lastName = reactive({ val: '', isValid: true })
const description = reactive({ val: '', isValid: true })
const rate = reactive({ val: null as number | null, isValid: true })
const areas = reactive({ val: [] as string[], isValid: true })

const formIsValid = ref(true)
const isSubmitting = ref(false)

const clearValidity = (input: string) => {
  const field = { firstName, lastName, description, rate, areas }[input] as any
  if (field) field.isValid = true
}

const validateForm = () => {
  formIsValid.value = true

  if (firstName.val === '') { firstName.isValid = false; formIsValid.value = false }
  if (lastName.val === '') { lastName.isValid = false; formIsValid.value = false }
  if (description.val === '') { description.isValid = false; formIsValid.value = false }
  if (!rate.val || rate.val < 0) { rate.isValid = false; formIsValid.value = false }
  if (areas.val.length === 0) { areas.isValid = false; formIsValid.value = false }
}

const submitForm = async () => {
  validateForm()
  if (!formIsValid.value) return

  isSubmitting.value = true

  const formData: CoachFormData = {
    first: firstName.val,
    last: lastName.val,
    desc: description.val,
    rate: rate.val!,
    areas: areas.val,
    userId: authStore.userId || undefined
  }

  coachesStore.registerCoach(formData)
  await navigateTo('/coaches')
}
</script>

<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form-row">
      <div class="form-group" :class="{ invalid: !firstName.isValid }">
        <label for="firstname">First Name</label>
        <input id="firstname" v-model.trim="firstName.val" type="text" placeholder="John" @blur="clearValidity('firstName')" />
        <p v-if="!firstName.isValid" class="error">Required</p>
      </div>

      <div class="form-group" :class="{ invalid: !lastName.isValid }">
        <label for="lastname">Last Name</label>
        <input id="lastname" v-model.trim="lastName.val" type="text" placeholder="Doe" @blur="clearValidity('lastName')" />
        <p v-if="!lastName.isValid" class="error">Required</p>
      </div>
    </div>

    <div class="form-group" :class="{ invalid: !description.isValid }">
      <label for="description">About You</label>
      <textarea id="description" v-model.trim="description.val" rows="4" placeholder="Describe your coaching experience..." @blur="clearValidity('description')"></textarea>
      <p v-if="!description.isValid" class="error">Required</p>
    </div>

    <div class="form-group" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate ($)</label>
      <input id="rate" v-model.number="rate.val" type="number" min="1" placeholder="50" @blur="clearValidity('rate')" />
      <p v-if="!rate.isValid" class="error">Enter a valid rate</p>
    </div>

    <div class="form-group" :class="{ invalid: !areas.isValid }">
      <label>Areas of Expertise</label>
      <div class="checkbox-group">
        <label class="checkbox-option">
          <input v-model="areas.val" type="checkbox" value="powerlifting" />
          <span>Powerlifting</span>
        </label>
        <label class="checkbox-option">
          <input v-model="areas.val" type="checkbox" value="bodybuilding" />
          <span>Bodybuilding</span>
        </label>
        <label class="checkbox-option">
          <input v-model="areas.val" type="checkbox" value="fitness" />
          <span>Fitness</span>
        </label>
        <label class="checkbox-option">
          <input v-model="areas.val" type="checkbox" value="yoga" />
          <span>Yoga</span>
        </label>
        <label class="checkbox-option">
          <input v-model="areas.val" type="checkbox" value="strength" />
          <span>Strength</span>
        </label>
        <label class="checkbox-option">
          <input v-model="areas.val" type="checkbox" value="nutrition" />
          <span>Nutrition</span>
        </label>
      </div>
      <p v-if="!areas.isValid" class="error">Select at least one</p>
    </div>

    <p v-if="!formIsValid" class="form-error">Please fill in all required fields</p>

    <button type="submit" class="submit-btn" :disabled="isSubmitting">
      {{ isSubmitting ? 'Registering...' : 'Register as Coach' }}
    </button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-group label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #a1a1aa;
}

.form-group input,
.form-group textarea {
  background: #121214;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.625rem 0.875rem;
  color: #fafafa;
  font-size: 0.875rem;
  transition: border-color 150ms ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #71717a;
}

.form-group.invalid input,
.form-group.invalid textarea {
  border-color: #ef4444;
}

.error {
  color: #ef4444;
  font-size: 0.75rem;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.checkbox-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  background: #121214;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms ease;
}

.checkbox-option:has(input:checked) {
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.3);
}

.checkbox-option input {
  width: 16px;
  height: 16px;
  accent-color: #3b82f6;
}

.checkbox-option span {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #a1a1aa;
}

.checkbox-option:has(input:checked) span {
  color: #3b82f6;
}

.form-error {
  color: #ef4444;
  font-size: 0.8125rem;
  text-align: center;
  padding: 0.625rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
}

.submit-btn {
  padding: 0.75rem 1.25rem;
  background: #3b82f6;
  color: #fff;
  font-weight: 500;
  font-size: 0.875rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 150ms ease;
}

.submit-btn:hover:not(:disabled) {
  background: #2563eb;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

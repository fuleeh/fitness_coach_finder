import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface CoachRequest {
  id: string
  coachId: string
  userEmail: string
  message: string
}

export const useRequestsStore = defineStore('requests', () => {
  const requests = ref<CoachRequest[]>([])

  const hasRequests = computed(() => requests.value.length > 0)

  const getRequests = computed(() => requests.value)

  const getRequestsForCoach = (coachId: string) => {
    return requests.value.filter(r => r.coachId === coachId)
  }

  const addRequest = async (request: Omit<CoachRequest, 'id'>) => {
    const newRequest: CoachRequest = {
      ...request,
      id: 'r' + Date.now()
    }
    requests.value.push(newRequest)
  }

  const fetchRequests = async () => {
    // In a real app, this would fetch from Firebase
  }

  return {
    requests,
    hasRequests,
    getRequests,
    getRequestsForCoach,
    addRequest,
    fetchRequests
  }
})

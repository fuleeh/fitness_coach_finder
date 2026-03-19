import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useRequestsStore = defineStore("requests", () => {
  const requests = ref([]);
  const hasRequests = computed(() => requests.value.length > 0);
  const getRequests = computed(() => requests.value);
  const getRequestsForCoach = (coachId) => {
    return requests.value.filter((r) => r.coachId === coachId);
  };
  const addRequest = async (request) => {
    const newRequest = {
      ...request,
      id: "r" + Date.now()
    };
    requests.value.push(newRequest);
  };
  const fetchRequests = async () => {
  };
  return {
    requests,
    hasRequests,
    getRequests,
    getRequestsForCoach,
    addRequest,
    fetchRequests
  };
});

export { useRequestsStore as u };
//# sourceMappingURL=requests-sfYsGNwQ.mjs.map

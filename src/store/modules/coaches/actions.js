export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const token = context.rootGetters.token;

    const response = await fetch(
      `https://coach-finder-b0665-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=${token}`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    if (!response.ok) {
      // error
    }

    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://coach-finder-b0665-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );

    const responeData = await response.json();

    if (!response.ok) {
      const error = new Error(responeData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in responeData) {
      const coach = {
        id: key,
        firstName: responeData[key].firstName,
        lastName: responeData[key].lastName,
        description: responeData[key].description,
        hourlyRate: responeData[key].hourlyRate,
        areas: responeData[key].areas,
      };

      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
};

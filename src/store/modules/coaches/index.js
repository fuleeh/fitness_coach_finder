import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Layne',
          lastName: 'Norton',
          areas: ['powerlifting', 'bodybuilding', 'fitness'],
          description:
            'Layne Norton is a physique coach, a natural professional bodybuilder and powerlifter, and holds a Ph. D. in nutritional sciences.',
          hourlyRate: 40,
        },
        {
          id: 'c2',
          firstName: 'Jeff',
          lastName: 'Nippard',
          areas: ['powerlifting', 'bodybuilding'],
          description:
            'is a Canadian professional bodybuilder, fitness coach, YouTuber, and powerlifter. He is best known for his informative and entertaining fitness videos on his youtube channel.',
          hourlyRate: 31,
        },
        {
          id: 'c3',
          firstName: 'Mike',
          lastName: 'Israetel',
          areas: ['bodybuilding', 'fitness'],
          description:
            'Cofounder of Renaissance Periodization, Dr. Mike Israetel​ holds a PhD in Sport Physiology from East Tennessee State University.',
          hourlyRate: 45,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};

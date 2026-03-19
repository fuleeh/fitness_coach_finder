import { createRouter, createWebHistory } from 'vue-router'
import CoachesList from '@/pages/CoachesList.vue'
import CoachDetail from '@/pages/CoachDetail.vue'
import ContactCoach from '@/pages/ContactCoach.vue'
import CoachRegistration from '@/pages/CoachRegistration.vue'
import RequestsReceived from '@/pages/RequestsReceived.vue'
import UserAuth from '@/pages/UserAuth.vue'
import NotFound from '@/pages/NotFound.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    { path: '/coaches/:id', component: CoachDetail, props: true },
    { path: '/contact/:coachId', component: ContactCoach, props: true },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true }
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true }
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  authStore.autoLogout()

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return '/auth'
  } else if (to.meta.requiresUnauth && authStore.isAuthenticated) {
    return '/coaches'
  }
})

export default router

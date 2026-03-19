import { u as useAuthStore } from './auth-CQlC96b_.mjs';
import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import 'pinia';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const auth = defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return navigateTo("/auth");
  }
  if (to.meta.requiresUnauth && authStore.isAuthenticated) {
    return navigateTo("/coaches");
  }
});

export { auth as default };
//# sourceMappingURL=auth-CP6u_h_Z.mjs.map

import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-CQlC96b_.mjs';
import { _ as _export_sfc, u as useRoute, a as useRouter } from './server.mjs';
import 'pinia';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    useAuthStore();
    const email = ref("");
    const password = ref("");
    const formIsValid = ref(true);
    const isLoading = ref(false);
    const error = ref(null);
    const mode = ref("login");
    const submitButtonCaption = computed(() => mode.value === "login" ? "Sign In" : "Create Account");
    const demoHint = computed(() => mode.value === "login" ? "Demo: demo@fitcoach.com / demo123" : "");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-page" }, _attrs))} data-v-95f601d7><div class="auth-card" data-v-95f601d7><h1 data-v-95f601d7>${ssrInterpolate(unref(mode) === "login" ? "Welcome Back" : "Create Account")}</h1><p class="subtitle" data-v-95f601d7>${ssrInterpolate(unref(mode) === "login" ? "Sign in to continue" : "Get started with FitCoach")}</p>`);
      if (unref(error)) {
        _push(`<div class="error-banner" data-v-95f601d7>${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isLoading)) {
        _push(`<div class="loading" data-v-95f601d7><div class="spinner" data-v-95f601d7></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form class="auth-form" data-v-95f601d7><div class="form-group" data-v-95f601d7><label for="email" data-v-95f601d7>Email</label><input id="email"${ssrRenderAttr("value", unref(email))} type="email" placeholder="you@example.com" autocomplete="email" data-v-95f601d7></div><div class="form-group" data-v-95f601d7><label for="password" data-v-95f601d7>Password</label><input id="password"${ssrRenderAttr("value", unref(password))} type="password" placeholder="Min. 6 characters" autocomplete="current-password" data-v-95f601d7></div>`);
      if (!unref(formIsValid)) {
        _push(`<p class="form-error" data-v-95f601d7>Enter a valid email and password (min. 6 characters)</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(demoHint)) {
        _push(`<p class="demo-hint" data-v-95f601d7>${ssrInterpolate(unref(demoHint))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit" class="submit-btn"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} data-v-95f601d7>${ssrInterpolate(unref(submitButtonCaption))}</button><p class="switch-mode" data-v-95f601d7>${ssrInterpolate(unref(mode) === "login" ? "Need an account?" : "Already have an account?")} <button type="button" data-v-95f601d7>${ssrInterpolate(unref(mode) === "login" ? "Sign up" : "Sign in")}</button></p></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95f601d7"]]);

export { auth as default };
//# sourceMappingURL=auth-Bh2Kg509.mjs.map

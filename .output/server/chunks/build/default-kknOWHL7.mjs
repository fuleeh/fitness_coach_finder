import { _ as __nuxt_component_0$1 } from './nuxt-link-Bjg0JjrQ.mjs';
import { defineComponent, computed, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-CQlC96b_.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const isLoggedIn = computed(() => authStore.isAuthenticated);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-81cc185b><div class="header__container" data-v-81cc185b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "header__logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="28" height="28" viewBox="0 0 28 28" fill="none" data-v-81cc185b${_scopeId}><rect x="2" y="10" width="5" height="8" rx="1.5" fill="#3b82f6" data-v-81cc185b${_scopeId}></rect><rect x="8" y="6" width="5" height="16" rx="1.5" fill="#3b82f6" data-v-81cc185b${_scopeId}></rect><rect x="14" y="8" width="5" height="12" rx="1.5" fill="#3b82f6" data-v-81cc185b${_scopeId}></rect><rect x="20" y="11" width="5" height="6" rx="1.5" fill="#3b82f6" data-v-81cc185b${_scopeId}></rect></svg><span data-v-81cc185b${_scopeId}>FitCoach</span>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 28 28",
                fill: "none"
              }, [
                createVNode("rect", {
                  x: "2",
                  y: "10",
                  width: "5",
                  height: "8",
                  rx: "1.5",
                  fill: "#3b82f6"
                }),
                createVNode("rect", {
                  x: "8",
                  y: "6",
                  width: "5",
                  height: "16",
                  rx: "1.5",
                  fill: "#3b82f6"
                }),
                createVNode("rect", {
                  x: "14",
                  y: "8",
                  width: "5",
                  height: "12",
                  rx: "1.5",
                  fill: "#3b82f6"
                }),
                createVNode("rect", {
                  x: "20",
                  y: "11",
                  width: "5",
                  height: "6",
                  rx: "1.5",
                  fill: "#3b82f6"
                })
              ])),
              createVNode("span", null, "FitCoach")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="header__nav" data-v-81cc185b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/coaches",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Coaches`);
          } else {
            return [
              createTextVNode("Coaches")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(isLoggedIn)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/requests",
          class: "nav-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Requests`);
            } else {
              return [
                createTextVNode("Requests")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<button class="nav-link nav-btn" data-v-81cc185b>Logout</button><!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth",
          class: "nav-cta"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Sign In`);
            } else {
              return [
                createTextVNode("Sign In")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</nav></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-81cc185b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheHeader = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-kknOWHL7.mjs.map

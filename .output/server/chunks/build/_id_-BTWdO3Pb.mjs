import { _ as __nuxt_component_0 } from './nuxt-link-Bjg0JjrQ.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useCoachesStore } from './coaches-jOqZTIkd.mjs';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const coachesStore = useCoachesStore();
    const coach = computed(() => coachesStore.getCoachById(route.params.id));
    const fullName = computed(() => coach.value ? `${coach.value.firstName} ${coach.value.lastName}` : "");
    const areas = computed(() => {
      var _a;
      return ((_a = coach.value) == null ? void 0 : _a.areas) || [];
    });
    const rate = computed(() => {
      var _a;
      return ((_a = coach.value) == null ? void 0 : _a.hourlyRate) || 0;
    });
    const description = computed(() => {
      var _a;
      return ((_a = coach.value) == null ? void 0 : _a.description) || "";
    });
    const getBadgeStyle = (area) => {
      switch (area) {
        case "powerlifting":
          return { bg: "rgba(249, 115, 22, 0.12)", color: "#f97316" };
        case "bodybuilding":
          return { bg: "rgba(168, 85, 247, 0.12)", color: "#a855f7" };
        case "fitness":
          return { bg: "rgba(59, 130, 246, 0.12)", color: "#3b82f6" };
        case "yoga":
          return { bg: "rgba(34, 197, 94, 0.12)", color: "#22c55e" };
        case "strength":
          return { bg: "rgba(239, 68, 68, 0.12)", color: "#ef4444" };
        case "nutrition":
          return { bg: "rgba(234, 179, 8, 0.12)", color: "#eab308" };
        default:
          return { bg: "rgba(156, 163, 175, 0.12)", color: "#9ca3af" };
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "coach-detail" }, _attrs))} data-v-9c4b224b><div class="coach-detail__container" data-v-9c4b224b><button class="back-btn" data-v-9c4b224b><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9c4b224b><polyline points="15 18 9 12 15 6" data-v-9c4b224b></polyline></svg> Back </button><div class="hero-card" data-v-9c4b224b><div class="avatar" data-v-9c4b224b>${ssrInterpolate((_a = unref(coach)) == null ? void 0 : _a.firstName[0])}${ssrInterpolate((_b = unref(coach)) == null ? void 0 : _b.lastName[0])}</div><div class="info" data-v-9c4b224b><h1 data-v-9c4b224b>${ssrInterpolate(unref(fullName))}</h1><p class="rate" data-v-9c4b224b>$${ssrInterpolate(unref(rate))}<span data-v-9c4b224b>/hour</span></p></div></div><div class="cta-card" data-v-9c4b224b><div class="cta-content" data-v-9c4b224b><h2 data-v-9c4b224b>Interested?</h2><p data-v-9c4b224b>Send a message to ${ssrInterpolate((_c = unref(coach)) == null ? void 0 : _c.firstName)}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/contact/${unref(route).params.id}`,
        class: "cta-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Coach`);
          } else {
            return [
              createTextVNode("Contact Coach")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="about-card" data-v-9c4b224b><h2 data-v-9c4b224b>About</h2><div class="badges" data-v-9c4b224b><!--[-->`);
      ssrRenderList(unref(areas), (area) => {
        _push(`<span class="badge" style="${ssrRenderStyle({ backgroundColor: getBadgeStyle(area).bg, color: getBadgeStyle(area).color })}" data-v-9c4b224b>${ssrInterpolate(area)}</span>`);
      });
      _push(`<!--]--></div><p data-v-9c4b224b>${ssrInterpolate(unref(description))}</p></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/coaches/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c4b224b"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BTWdO3Pb.mjs.map

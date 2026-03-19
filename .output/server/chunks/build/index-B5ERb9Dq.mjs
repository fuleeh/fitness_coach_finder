import { _ as __nuxt_component_0 } from './nuxt-link-Bjg0JjrQ.mjs';
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createTextVNode, reactive, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-CQlC96b_.mjs';
import { u as useCoachesStore } from './coaches-jOqZTIkd.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CoachItem",
  __ssrInlineRender: true,
  props: {
    id: {},
    firstName: {},
    lastName: {},
    rate: {},
    areas: {}
  },
  setup(__props) {
    const props = __props;
    const fullName = `${props.firstName} ${props.lastName}`;
    const getBadgeStyle = (area) => {
      switch (area) {
        case "powerlifting":
          return { bg: "rgba(249, 115, 22, 0.1)", color: "#f97316", border: "rgba(249, 115, 22, 0.2)" };
        case "bodybuilding":
          return { bg: "rgba(168, 85, 247, 0.1)", color: "#a855f7", border: "rgba(168, 85, 247, 0.2)" };
        case "fitness":
          return { bg: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", border: "rgba(59, 130, 246, 0.2)" };
        case "yoga":
          return { bg: "rgba(34, 197, 94, 0.1)", color: "#22c55e", border: "rgba(34, 197, 94, 0.2)" };
        case "strength":
          return { bg: "rgba(239, 68, 68, 0.1)", color: "#ef4444", border: "rgba(239, 68, 68, 0.2)" };
        case "nutrition":
          return { bg: "rgba(234, 179, 8, 0.1)", color: "#eab308", border: "rgba(234, 179, 8, 0.2)" };
        default:
          return { bg: "rgba(156, 163, 175, 0.1)", color: "#9ca3af", border: "rgba(156, 163, 175, 0.2)" };
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<li${ssrRenderAttrs(mergeProps({ class: "coach-card" }, _attrs))} data-v-8d984741><div class="coach-card__avatar" data-v-8d984741>${ssrInterpolate(__props.firstName[0])}${ssrInterpolate(__props.lastName[0])}</div><div class="coach-card__content" data-v-8d984741><h3 class="coach-card__name" data-v-8d984741>${ssrInterpolate(fullName)}</h3><p class="coach-card__rate" data-v-8d984741>$${ssrInterpolate(__props.rate)}<span data-v-8d984741>/hr</span></p></div><div class="coach-card__badges" data-v-8d984741><!--[-->`);
      ssrRenderList(__props.areas, (area) => {
        _push(`<span class="badge" style="${ssrRenderStyle({
          backgroundColor: getBadgeStyle(area).bg,
          color: getBadgeStyle(area).color,
          borderColor: getBadgeStyle(area).border
        })}" data-v-8d984741>${ssrInterpolate(area)}</span>`);
      });
      _push(`<!--]--></div><div class="coach-card__actions" data-v-8d984741>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/contact/${__props.id}`,
        class: "btn btn--outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact `);
          } else {
            return [
              createTextVNode(" Contact ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/coaches/${__props.id}`,
        class: "btn btn--primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Profile `);
          } else {
            return [
              createTextVNode(" View Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/coaches/CoachItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CoachItem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8d984741"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CoachFilter",
  __ssrInlineRender: true,
  emits: ["change-filter"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const filters = reactive({
      powerlifting: true,
      bodybuilding: true,
      fitness: true,
      yoga: true,
      strength: true,
      nutrition: true
    });
    watch(filters, () => {
      emit("change-filter", { ...filters });
    }, { deep: true });
    const getFilterStyle = (id, checked) => {
      if (!checked) {
        return { bg: "transparent", border: "rgba(255,255,255,0.08)", color: "#71717a" };
      }
      switch (id) {
        case "powerlifting":
          return { bg: "rgba(249, 115, 22, 0.12)", border: "rgba(249, 115, 22, 0.25)", color: "#f97316" };
        case "bodybuilding":
          return { bg: "rgba(168, 85, 247, 0.12)", border: "rgba(168, 85, 247, 0.25)", color: "#a855f7" };
        case "fitness":
          return { bg: "rgba(59, 130, 246, 0.12)", border: "rgba(59, 130, 246, 0.25)", color: "#3b82f6" };
        case "yoga":
          return { bg: "rgba(34, 197, 94, 0.12)", border: "rgba(34, 197, 94, 0.25)", color: "#22c55e" };
        case "strength":
          return { bg: "rgba(239, 68, 68, 0.12)", border: "rgba(239, 68, 68, 0.25)", color: "#ef4444" };
        case "nutrition":
          return { bg: "rgba(234, 179, 8, 0.12)", border: "rgba(234, 179, 8, 0.25)", color: "#eab308" };
        default:
          return { bg: "transparent", border: "rgba(255,255,255,0.08)", color: "#71717a" };
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "filter-section" }, _attrs))} data-v-8052796b><span class="filter-label" data-v-8052796b>Filter</span><div class="filter-options" data-v-8052796b><label class="filter-pill" style="${ssrRenderStyle({
        backgroundColor: getFilterStyle("powerlifting", filters.powerlifting).bg,
        borderColor: getFilterStyle("powerlifting", filters.powerlifting).border,
        color: getFilterStyle("powerlifting", filters.powerlifting).color
      })}" data-v-8052796b><input type="checkbox" id="powerlifting"${ssrIncludeBooleanAttr(Array.isArray(filters.powerlifting) ? ssrLooseContain(filters.powerlifting, null) : filters.powerlifting) ? " checked" : ""} data-v-8052796b><span data-v-8052796b>Powerlifting</span></label><label class="filter-pill" style="${ssrRenderStyle({
        backgroundColor: getFilterStyle("bodybuilding", filters.bodybuilding).bg,
        borderColor: getFilterStyle("bodybuilding", filters.bodybuilding).border,
        color: getFilterStyle("bodybuilding", filters.bodybuilding).color
      })}" data-v-8052796b><input type="checkbox" id="bodybuilding"${ssrIncludeBooleanAttr(Array.isArray(filters.bodybuilding) ? ssrLooseContain(filters.bodybuilding, null) : filters.bodybuilding) ? " checked" : ""} data-v-8052796b><span data-v-8052796b>Bodybuilding</span></label><label class="filter-pill" style="${ssrRenderStyle({
        backgroundColor: getFilterStyle("fitness", filters.fitness).bg,
        borderColor: getFilterStyle("fitness", filters.fitness).border,
        color: getFilterStyle("fitness", filters.fitness).color
      })}" data-v-8052796b><input type="checkbox" id="fitness"${ssrIncludeBooleanAttr(Array.isArray(filters.fitness) ? ssrLooseContain(filters.fitness, null) : filters.fitness) ? " checked" : ""} data-v-8052796b><span data-v-8052796b>Fitness</span></label><label class="filter-pill" style="${ssrRenderStyle({
        backgroundColor: getFilterStyle("yoga", filters.yoga).bg,
        borderColor: getFilterStyle("yoga", filters.yoga).border,
        color: getFilterStyle("yoga", filters.yoga).color
      })}" data-v-8052796b><input type="checkbox" id="yoga"${ssrIncludeBooleanAttr(Array.isArray(filters.yoga) ? ssrLooseContain(filters.yoga, null) : filters.yoga) ? " checked" : ""} data-v-8052796b><span data-v-8052796b>Yoga</span></label><label class="filter-pill" style="${ssrRenderStyle({
        backgroundColor: getFilterStyle("strength", filters.strength).bg,
        borderColor: getFilterStyle("strength", filters.strength).border,
        color: getFilterStyle("strength", filters.strength).color
      })}" data-v-8052796b><input type="checkbox" id="strength"${ssrIncludeBooleanAttr(Array.isArray(filters.strength) ? ssrLooseContain(filters.strength, null) : filters.strength) ? " checked" : ""} data-v-8052796b><span data-v-8052796b>Strength</span></label><label class="filter-pill" style="${ssrRenderStyle({
        backgroundColor: getFilterStyle("nutrition", filters.nutrition).bg,
        borderColor: getFilterStyle("nutrition", filters.nutrition).border,
        color: getFilterStyle("nutrition", filters.nutrition).color
      })}" data-v-8052796b><input type="checkbox" id="nutrition"${ssrIncludeBooleanAttr(Array.isArray(filters.nutrition) ? ssrLooseContain(filters.nutrition, null) : filters.nutrition) ? " checked" : ""} data-v-8052796b><span data-v-8052796b>Nutrition</span></label></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/coaches/CoachFilter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CoachFilter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8052796b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const coachesStore = useCoachesStore();
    const isLoading = ref(false);
    const error = ref(null);
    const activeFilters = ref({
      powerlifting: true,
      bodybuilding: true,
      fitness: true,
      yoga: true,
      strength: true,
      nutrition: true
    });
    const isLoggedIn = computed(() => authStore.isAuthenticated);
    const isCoach = computed(() => coachesStore.isCoach(authStore.userId || ""));
    const filteredCoaches = computed(() => {
      return coachesStore.getCoaches.filter((coach) => {
        if (activeFilters.value.powerlifting && coach.areas.includes("powerlifting")) return true;
        if (activeFilters.value.bodybuilding && coach.areas.includes("bodybuilding")) return true;
        if (activeFilters.value.fitness && coach.areas.includes("fitness")) return true;
        if (activeFilters.value.yoga && coach.areas.includes("yoga")) return true;
        if (activeFilters.value.strength && coach.areas.includes("strength")) return true;
        if (activeFilters.value.nutrition && coach.areas.includes("nutrition")) return true;
        return false;
      });
    });
    const hasCoaches = computed(() => !isLoading.value && coachesStore.hasCoaches);
    const setFilters = (filters) => {
      activeFilters.value = filters;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "coaches-page" }, _attrs))} data-v-72dd4981><div class="coaches-page__container" data-v-72dd4981>`);
      if (unref(error)) {
        _push(`<div class="error-toast" data-v-72dd4981><span data-v-72dd4981>${ssrInterpolate(unref(error))}</span><button data-v-72dd4981>Dismiss</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(CoachFilter, { onChangeFilter: setFilters }, null, _parent));
      _push(`<div class="coaches-page__actions" data-v-72dd4981>`);
      if (!unref(isLoggedIn)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/auth?redirect=register",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Login to Register `);
            } else {
              return [
                createTextVNode(" Login to Register ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (!unref(isCoach) && !unref(isLoading)) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/register",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Register as Coach `);
            } else {
              return [
                createTextVNode(" Register as Coach ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(isLoading)) {
        _push(`<div class="loading" data-v-72dd4981><div class="spinner" data-v-72dd4981></div><p data-v-72dd4981>Loading coaches...</p></div>`);
      } else if (unref(hasCoaches)) {
        _push(`<div class="coaches-grid" data-v-72dd4981><!--[-->`);
        ssrRenderList(unref(filteredCoaches), (coach) => {
          _push(ssrRenderComponent(CoachItem, {
            key: coach.id,
            id: coach.id,
            "first-name": coach.firstName,
            "last-name": coach.lastName,
            rate: coach.hourlyRate,
            areas: coach.areas
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="empty" data-v-72dd4981><p data-v-72dd4981>No coaches found matching your filters.</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/coaches/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-72dd4981"]]);

export { index as default };
//# sourceMappingURL=index-B5ERb9Dq.mjs.map

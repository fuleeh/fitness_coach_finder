import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-CQlC96b_.mjs';
import { u as useCoachesStore } from './coaches-jOqZTIkd.mjs';
import { u as useRequestsStore } from './requests-sfYsGNwQ.mjs';
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
  __name: "[coachId]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    useAuthStore();
    const coachesStore = useCoachesStore();
    useRequestsStore();
    const coach = computed(() => coachesStore.getCoachById(route.params.coachId));
    const message = ref("");
    const isSubmitting = ref(false);
    const isSuccess = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-449ae9be><div class="contact-page__container" data-v-449ae9be><button class="back-btn" data-v-449ae9be><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-449ae9be><polyline points="15 18 9 12 15 6" data-v-449ae9be></polyline></svg> Back </button><div class="contact-card" data-v-449ae9be>`);
      if (unref(isSuccess)) {
        _push(`<div class="success-state" data-v-449ae9be><div class="success-icon" data-v-449ae9be><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-449ae9be><polyline points="20 6 9 17 4 12" data-v-449ae9be></polyline></svg></div><h3 data-v-449ae9be>Message Sent</h3><p data-v-449ae9be>${ssrInterpolate((_a = unref(coach)) == null ? void 0 : _a.firstName)} will get back to you soon.</p></div>`);
      } else {
        _push(`<!--[--><h2 data-v-449ae9be>Contact ${ssrInterpolate((_b = unref(coach)) == null ? void 0 : _b.firstName)} ${ssrInterpolate((_c = unref(coach)) == null ? void 0 : _c.lastName)}</h2><p class="subtitle" data-v-449ae9be>Send a message to start your fitness journey</p><form data-v-449ae9be><div class="form-group" data-v-449ae9be><label for="message" data-v-449ae9be>Your Message</label><textarea id="message" rows="5" placeholder="Tell the coach about your goals and experience..." data-v-449ae9be>${ssrInterpolate(unref(message))}</textarea></div><button type="submit" class="submit-btn"${ssrIncludeBooleanAttr(unref(isSubmitting) || !unref(message).trim()) ? " disabled" : ""} data-v-449ae9be>${ssrInterpolate(unref(isSubmitting) ? "Sending..." : "Send Message")}</button></form><!--]-->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/[coachId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _coachId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-449ae9be"]]);

export { _coachId_ as default };
//# sourceMappingURL=_coachId_-BOU56pPd.mjs.map

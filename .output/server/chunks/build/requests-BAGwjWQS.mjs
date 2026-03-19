import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useRequestsStore } from './requests-sfYsGNwQ.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "requests",
  __ssrInlineRender: true,
  setup(__props) {
    const requestsStore = useRequestsStore();
    const isLoading = ref(false);
    ref(null);
    const receivedRequests = computed(() => requestsStore.getRequests);
    const hasRequests = computed(() => requestsStore.hasRequests);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "requests-page" }, _attrs))} data-v-38591de2><div class="requests-page__container" data-v-38591de2><h1 data-v-38591de2>Contact Requests</h1><p class="subtitle" data-v-38591de2>Messages from potential clients</p>`);
      if (unref(isLoading)) {
        _push(`<div class="loading" data-v-38591de2><div class="spinner" data-v-38591de2></div><p data-v-38591de2>Loading requests...</p></div>`);
      } else if (unref(hasRequests)) {
        _push(`<ul class="requests-list" data-v-38591de2><!--[-->`);
        ssrRenderList(unref(receivedRequests), (req) => {
          _push(`<li class="request-item" data-v-38591de2><div class="request-icon" data-v-38591de2><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-38591de2><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-38591de2></path><polyline points="22,6 12,13 2,6" data-v-38591de2></polyline></svg></div><div class="request-content" data-v-38591de2><p class="email" data-v-38591de2>${ssrInterpolate(req.userEmail)}</p><p class="message" data-v-38591de2>${ssrInterpolate(req.message)}</p></div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<div class="empty" data-v-38591de2><p data-v-38591de2>No requests yet. When clients contact you, their messages will appear here.</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/requests.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const requests = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-38591de2"]]);

export { requests as default };
//# sourceMappingURL=requests-BAGwjWQS.mjs.map

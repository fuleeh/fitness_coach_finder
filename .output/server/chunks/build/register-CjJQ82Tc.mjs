import { defineComponent, resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'pinia';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoachForm = resolveComponent("CoachForm");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "registration-page" }, _attrs))} data-v-ed6bf2ca><div class="registration-page__container" data-v-ed6bf2ca><h1 data-v-ed6bf2ca>Become a Coach</h1><p class="subtitle" data-v-ed6bf2ca>Join our community of fitness professionals</p><div class="form-card" data-v-ed6bf2ca>`);
      _push(ssrRenderComponent(_component_CoachForm, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed6bf2ca"]]);

export { register as default };
//# sourceMappingURL=register-CjJQ82Tc.mjs.map

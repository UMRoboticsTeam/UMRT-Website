import { u as useHead, _ as __nuxt_component_0 } from './Hero-dIxnY8o_.mjs';
import { unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { H as HeroImg } from './CIRC-2024-DSeMRCbW.mjs';
import { S as Section } from './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "outreach",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Outreach",
      meta: [
        { name: "description", content: "Outreach information of UMRT" },
        { property: "og:title", content: "UMRT - Outreach" },
        { property: "og:description", content: "Outreach information of UMRT" }
        // { property: 'og:image', content: '' },
        // { property: 'og:url', content: '' },
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Hero, {
        title: "Outreach",
        imgSrc: unref(HeroImg)
      }, null, _parent));
      _push(ssrRenderComponent(Section, { theme: "dark" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> The University of Manitoba Robotics Team participates in outreach events, catered towards middle school to highschool ages. <br${_scopeId}> Events include team presentations, Arduino workshops, sumo bot development, and rover showcasing. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" The University of Manitoba Robotics Team participates in outreach events, catered towards middle school to highschool ages. "),
                createVNode("br"),
                createTextVNode(" Events include team presentations, Arduino workshops, sumo bot development, and rover showcasing. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Section, {
        theme: "light",
        title: "Contact Us"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` If you&#39;d like to inquire about outreach events, reach us at <a href="mailto:exec.umrt@gmail.com"${_scopeId}>exec.umrt@gmail.com</a>. `);
          } else {
            return [
              createTextVNode(" If you'd like to inquire about outreach events, reach us at "),
              createVNode("a", { href: "mailto:exec.umrt@gmail.com" }, "exec.umrt@gmail.com"),
              createTextVNode(". ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/outreach.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=outreach-5oGiOMFB.mjs.map

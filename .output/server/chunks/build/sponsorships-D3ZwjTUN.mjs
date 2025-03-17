import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { u as useHead, _ as __nuxt_component_0 } from './Hero-dIxnY8o_.mjs';
import { _ as _sfc_main$1 } from './Sponsors-Gp-UJ9h9.mjs';
import { unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { S as Section } from './server.mjs';
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

const HeroImg = "" + buildAssetsURL("JCA_ROS_Event.gj_txohK.jpg");
const _sfc_main = {
  __name: "sponsorships",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Sponsorships",
      meta: [
        { name: "description", content: "Sponsorships information of UMRT" },
        { property: "og:title", content: "UMRT - Sponsorships" },
        { property: "og:description", content: "Sponsorships information of UMRT" }
        // { property: 'og:image', content: '' },
        // { property: 'og:url', content: '' },
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      const _component_Sponsors = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Hero, {
        title: "Sponsorships",
        imgSrc: unref(HeroImg)
      }, null, _parent));
      _push(ssrRenderComponent(Section, { theme: "dark" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> We&#39;re currently seeking sponsors to support our inaugural venture into CIRC. Your sponsorship will help fuel our project&#39;s success. Additionally, we graciously accept software sponsorships and monetary contributions. Connect with us through our email to discuss how you can be a part of our journey! <br${_scopeId}><br${_scopeId}> Feel free to contact us at exec.umrt@gmail.com for any questions or inquiries. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" We're currently seeking sponsors to support our inaugural venture into CIRC. Your sponsorship will help fuel our project's success. Additionally, we graciously accept software sponsorships and monetary contributions. Connect with us through our email to discuss how you can be a part of our journey! "),
                createVNode("br"),
                createVNode("br"),
                createTextVNode(" Feel free to contact us at exec.umrt@gmail.com for any questions or inquiries. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Sponsors, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sponsorships.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sponsorships-D3ZwjTUN.mjs.map

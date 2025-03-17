import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { u as useHead, _ as __nuxt_component_0 } from './Hero-dIxnY8o_.mjs';
import { unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { H as HeroImg } from './CIRC-2024-DSeMRCbW.mjs';
import { _ as _export_sfc, S as Section } from './server.mjs';
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

const CIRCLogo = "" + buildAssetsURL("CIRC_banner.C49l5hHN.png");
const _sfc_main = {
  __name: "competitions",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Competitions",
      meta: [
        { name: "description", content: "Competitions information of UMRT" },
        { property: "og:title", content: "UMRT - Competitions" },
        { property: "og:description", content: "Competitions information of UMRT" }
        // { property: 'og:image', content: '' },
        // { property: 'og:url', content: '' },
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-baae0045>`);
      _push(ssrRenderComponent(_component_Hero, {
        title: "Competitions",
        imgSrc: unref(HeroImg)
      }, null, _parent));
      _push(ssrRenderComponent(Section, { theme: "dark" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-baae0045${_scopeId}> The University of Manitoba Robotics Team currently competes in the Canadian International Rover Challenge held in Drumheller, AB. </p><a href="https://circ.cstag.ca/" class="circ-banner d-flex justify-content-center" title="Visit the CIRC Official Website" data-v-baae0045${_scopeId}><img${ssrRenderAttr("src", unref(CIRCLogo))} style="${ssrRenderStyle({})}" data-v-baae0045${_scopeId}></a><blockquote class="blockquote" data-v-baae0045${_scopeId}><h2 data-v-baae0045${_scopeId}>About CIRC</h2><p data-v-baae0045${_scopeId}> The Canadian International Rover Challenge (CIRC) is a rover competition open to post-secondary student design teams from all around the world. Similar to other competitions, such as the University Rover Challenge, European Rover Challenge, UK Rover Challenge, and the Indian Rover Challenge, teams will simulate what it would be like as an early colony on an extraterrestrial planet. Teams will bring their prototype rover to help them accomplish challenging scenarios. The rovers will be faced with completing various tasks that future rovers will be expected to perform. These include traversing varying terrain, autonomous operations, operating a dexterous arm and much more! ..... <a href="https://circ.cstag.ca/about/" data-v-baae0045${_scopeId}>Read More</a></p></blockquote>`);
          } else {
            return [
              createVNode("p", null, " The University of Manitoba Robotics Team currently competes in the Canadian International Rover Challenge held in Drumheller, AB. "),
              createVNode("a", {
                href: "https://circ.cstag.ca/",
                class: "circ-banner d-flex justify-content-center",
                title: "Visit the CIRC Official Website"
              }, [
                createVNode("img", {
                  src: unref(CIRCLogo),
                  style: {}
                }, null, 8, ["src"])
              ]),
              createVNode("blockquote", { class: "blockquote" }, [
                createVNode("h2", null, "About CIRC"),
                createVNode("p", null, [
                  createTextVNode(" The Canadian International Rover Challenge (CIRC) is a rover competition open to post-secondary student design teams from all around the world. Similar to other competitions, such as the University Rover Challenge, European Rover Challenge, UK Rover Challenge, and the Indian Rover Challenge, teams will simulate what it would be like as an early colony on an extraterrestrial planet. Teams will bring their prototype rover to help them accomplish challenging scenarios. The rovers will be faced with completing various tasks that future rovers will be expected to perform. These include traversing varying terrain, autonomous operations, operating a dexterous arm and much more! ..... "),
                  createVNode("a", { href: "https://circ.cstag.ca/about/" }, "Read More")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Section, {
        theme: "light",
        title: "Competition History"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<table class="table table-sm text-start" data-v-baae0045${_scopeId}><thead data-v-baae0045${_scopeId}><tr data-v-baae0045${_scopeId}><th scope="col" data-v-baae0045${_scopeId}>Date</th><th scope="col" data-v-baae0045${_scopeId}>Competition</th></tr></thead><tbody data-v-baae0045${_scopeId}><tr data-v-baae0045${_scopeId}><th scope="row" data-v-baae0045${_scopeId}>August 9-12, 2024</th><td data-v-baae0045${_scopeId}><a href="https://circ.cstag.ca/2024/results/" data-v-baae0045${_scopeId}>Canadian International Rover Competition 2024</a></td></tr><tr data-v-baae0045${_scopeId}><th scope="row" data-v-baae0045${_scopeId}>August 8-11, 2025</th><td data-v-baae0045${_scopeId}><a href="https://circ.cstag.ca/2025/" data-v-baae0045${_scopeId}>Canadian International Rover Competition 2025</a></td></tr></tbody></table>`);
          } else {
            return [
              createVNode("table", { class: "table table-sm text-start" }, [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { scope: "col" }, "Date"),
                    createVNode("th", { scope: "col" }, "Competition")
                  ])
                ]),
                createVNode("tbody", null, [
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "August 9-12, 2024"),
                    createVNode("td", null, [
                      createVNode("a", { href: "https://circ.cstag.ca/2024/results/" }, "Canadian International Rover Competition 2024")
                    ])
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { scope: "row" }, "August 8-11, 2025"),
                    createVNode("td", null, [
                      createVNode("a", { href: "https://circ.cstag.ca/2025/" }, "Canadian International Rover Competition 2025")
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/competitions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const competitions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-baae0045"]]);

export { competitions as default };
//# sourceMappingURL=competitions-Dof-Sd6r.mjs.map

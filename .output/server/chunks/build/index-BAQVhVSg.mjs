import { unref, withCtx, createVNode, createTextVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead, _ as __nuxt_component_0 } from './Hero-dIxnY8o_.mjs';
import { H as HeroImg, S as Section, _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2 } from './Sponsors-Gp-UJ9h9.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "page-section bg-secondary text-white",
    id: "socials"
  }, _attrs))}><div class="container px-4 px-lg-5 text-center"><div class="social"><a href="https://www.instagram.com/umroboticsteam/" title="@umroboticsteam"><i class="bi-instagram"></i></a><a href="https://www.linkedin.com/company/univeristy-of-manitoba-robotics-team/" title="UMRT LinkedIn"><i class="bi-linkedin"></i></a><a href="mailto:exec.umrt@gmail.com" title="UMRT E-Mail"><i class="bi-envelope"></i></a></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Socials.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Socials = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "University of Manitoba Robotics Team",
      meta: [
        { name: "description", content: "UMRT Homepage" },
        { property: "og:title", content: "University of Manitoba Robotics Team" },
        { property: "og:description", content: "UMRT Homepage" }
        // { property: 'og:image', content: '' },
        // { property: 'og:url', content: '' },
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(__nuxt_component_0, {
        title: "",
        imgSrc: unref(HeroImg),
        showLogo: "true",
        backgroundPosition: "bottom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="text-white font-weight-bold"${_scopeId}>University of Manitoba</h1><h1 class="text-white font-weight-bold"${_scopeId}>Robotics Team</h1>`);
          } else {
            return [
              createVNode("h1", { class: "text-white font-weight-bold" }, "University of Manitoba"),
              createVNode("h1", { class: "text-white font-weight-bold" }, "Robotics Team")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Section, {
        theme: "light",
        title: "About Us",
        id: "about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> UMRT - The University of Manitoba Robotics Team is an ambitious group of students interested in competing in the Canadian International Rover Challenge 2024! Our disciplines range from Computer Vision, Mechanical Engineering, Electrical Engineering, Embedded Systems, Wireless Communications, and Pedology. We have a lot of plans for the future along with other types of events such as workshops, open competitions, and more! <br${_scopeId}><br${_scopeId}> Feel free to contact us at exec.umrt@gmail.com for any questions or inquiries. </p>`);
          } else {
            return [
              createVNode("p", null, [
                createTextVNode(" UMRT - The University of Manitoba Robotics Team is an ambitious group of students interested in competing in the Canadian International Rover Challenge 2024! Our disciplines range from Computer Vision, Mechanical Engineering, Electrical Engineering, Embedded Systems, Wireless Communications, and Pedology. We have a lot of plans for the future along with other types of events such as workshops, open competitions, and more! "),
                createVNode("br"),
                createVNode("br"),
                createTextVNode(" Feel free to contact us at exec.umrt@gmail.com for any questions or inquiries. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Section, {
        theme: "dark",
        title: "Competitions"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}> The University of Manitoba Robotics Team competes in the Canadian International Rover Competition (CIRC) held annually in Drumheller, AB, Canada. </p><p${_scopeId}>Check out more information!</p><a class="btn btn-light btn-xl" href="/competitions"${_scopeId}>Competitions</a>`);
          } else {
            return [
              createVNode("p", null, " The University of Manitoba Robotics Team competes in the Canadian International Rover Competition (CIRC) held annually in Drumheller, AB, Canada. "),
              createVNode("p", null, "Check out more information!"),
              createVNode("a", {
                class: "btn btn-light btn-xl",
                href: "/competitions"
              }, "Competitions")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(Section, {
        theme: "primary",
        title: "Links & Joining The Team!",
        id: "join"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Check out our socials and how to join the team by clicking on our linktree below!</p><a class="btn btn-light btn-xl" href="https://linktr.ee/umrt"${_scopeId}>LINKTREE</a>`);
          } else {
            return [
              createVNode("p", null, "Check out our socials and how to join the team by clicking on our linktree below!"),
              createVNode("a", {
                class: "btn btn-light btn-xl",
                href: "https://linktr.ee/umrt"
              }, "LINKTREE")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Socials, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BAQVhVSg.mjs.map

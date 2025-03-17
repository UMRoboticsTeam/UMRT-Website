import { u as useHead, _ as __nuxt_component_0 } from './Hero-dIxnY8o_.mjs';
import { unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { H as HeroImg } from './TeamPhoto-2-ZeAosNSA.mjs';
import { _ as _export_sfc, S as Section } from './server.mjs';
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
  __name: "archive",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Archive",
      meta: [
        { name: "description", content: "Info and file archives of UMRT" },
        { property: "og:title", content: "UMRT - Archive" },
        { property: "og:description", content: "Info and file archives of UMRT" }
        // { property: 'og:image', content: '' },
        // { property: 'og:url', content: '' },
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-059bfb27>`);
      _push(ssrRenderComponent(_component_Hero, {
        title: "Archive",
        imgSrc: unref(HeroImg)
      }, null, _parent));
      _push(ssrRenderComponent(Section, { theme: "dark" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-center mt-0" data-v-059bfb27${_scopeId}>2023-2024</h2><hr class="divider" data-v-059bfb27${_scopeId}><p data-v-059bfb27${_scopeId}>The 2023-2024 team was the first team of UMRT, founded by Syed Abraham Ahmed and Minjeong Kang. In their inaugural year, the team successfully built a fully functional rover to compete in the 2024 Canadian International Rover Challenge (CIRC). Their journey marked a significant milestone in the development of the team, setting a strong foundation for future growth.</p><div class="table-container" data-v-059bfb27${_scopeId}><table data-v-059bfb27${_scopeId}><thead data-v-059bfb27${_scopeId}><tr data-v-059bfb27${_scopeId}><th data-v-059bfb27${_scopeId}>Role</th><th data-v-059bfb27${_scopeId}>Member</th></tr></thead><tbody data-v-059bfb27${_scopeId}><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Co-Presidents</td><td data-v-059bfb27${_scopeId}>Syed Abraham Ahmed, Minjeong Kang</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Vice President</td><td data-v-059bfb27${_scopeId}>Nikolaus Reichert</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Secretary</td><td data-v-059bfb27${_scopeId}>Garizaldy Gerra</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Treasurer/Webmaster</td><td data-v-059bfb27${_scopeId}>Connor Pagtakhan</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Business Director</td><td data-v-059bfb27${_scopeId}>Erica von Stackelberg</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Promotions Director</td><td data-v-059bfb27${_scopeId}>Breanna Stratton</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>System Lead</td><td data-v-059bfb27${_scopeId}>Syed Abraham Ahmed</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Embedded Lead</td><td data-v-059bfb27${_scopeId}>Nikolaus Reichert</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Communications Leads</td><td data-v-059bfb27${_scopeId}>Kevin Burston, Adam Garofalo, Minjeong Kang</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Electrical Lead</td><td data-v-059bfb27${_scopeId}>Erica von Stackelberg</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Chassis Lead</td><td data-v-059bfb27${_scopeId}>Matthew Nutbean</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Robotic Arm Leads</td><td data-v-059bfb27${_scopeId}>Graham Nash, Noah Reeder</td></tr><tr data-v-059bfb27${_scopeId}><td data-v-059bfb27${_scopeId}>Payload Leads</td><td data-v-059bfb27${_scopeId}>Breanna Stratton, Skylar Trudeau</td></tr></tbody></table></div><div class="members-list" data-v-059bfb27${_scopeId}><h4 data-v-059bfb27${_scopeId}>Members</h4><div class="list" data-v-059bfb27${_scopeId}> Syed Abraham Ahmed, Minjeong Kang, Connor Pagtakhan, Garizaldy Gerra, Nikolaus Reichert, Erica von Stackelberg, Breanna Stratton, Skylar Trudeau, Kevin Burston, Adam Garofalo, Ali Syed Ahmed, Matthew Nutbean, Graham Nash, Noah Reeder, Edcel Abanto, Ghrum Yemessghen, Anna Kulchycki, Kate Lacerna, Spencer Molloy, Jonah St. Hilaire, Bryce Cadieux, Alessandro Potenza, Spencer Ryznar, Daigh Burgess, Kyra Natividad, Ankit Kaur </div></div>`);
          } else {
            return [
              createVNode("h2", { class: "text-center mt-0" }, "2023-2024"),
              createVNode("hr", { class: "divider" }),
              createVNode("p", null, "The 2023-2024 team was the first team of UMRT, founded by Syed Abraham Ahmed and Minjeong Kang. In their inaugural year, the team successfully built a fully functional rover to compete in the 2024 Canadian International Rover Challenge (CIRC). Their journey marked a significant milestone in the development of the team, setting a strong foundation for future growth."),
              createVNode("div", { class: "table-container" }, [
                createVNode("table", null, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", null, "Role"),
                      createVNode("th", null, "Member")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    createVNode("tr", null, [
                      createVNode("td", null, "Co-Presidents"),
                      createVNode("td", null, "Syed Abraham Ahmed, Minjeong Kang")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Vice President"),
                      createVNode("td", null, "Nikolaus Reichert")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Secretary"),
                      createVNode("td", null, "Garizaldy Gerra")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Treasurer/Webmaster"),
                      createVNode("td", null, "Connor Pagtakhan")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Business Director"),
                      createVNode("td", null, "Erica von Stackelberg")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Promotions Director"),
                      createVNode("td", null, "Breanna Stratton")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "System Lead"),
                      createVNode("td", null, "Syed Abraham Ahmed")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Embedded Lead"),
                      createVNode("td", null, "Nikolaus Reichert")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Communications Leads"),
                      createVNode("td", null, "Kevin Burston, Adam Garofalo, Minjeong Kang")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Electrical Lead"),
                      createVNode("td", null, "Erica von Stackelberg")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Chassis Lead"),
                      createVNode("td", null, "Matthew Nutbean")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Robotic Arm Leads"),
                      createVNode("td", null, "Graham Nash, Noah Reeder")
                    ]),
                    createVNode("tr", null, [
                      createVNode("td", null, "Payload Leads"),
                      createVNode("td", null, "Breanna Stratton, Skylar Trudeau")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "members-list" }, [
                createVNode("h4", null, "Members"),
                createVNode("div", { class: "list" }, " Syed Abraham Ahmed, Minjeong Kang, Connor Pagtakhan, Garizaldy Gerra, Nikolaus Reichert, Erica von Stackelberg, Breanna Stratton, Skylar Trudeau, Kevin Burston, Adam Garofalo, Ali Syed Ahmed, Matthew Nutbean, Graham Nash, Noah Reeder, Edcel Abanto, Ghrum Yemessghen, Anna Kulchycki, Kate Lacerna, Spencer Molloy, Jonah St. Hilaire, Bryce Cadieux, Alessandro Potenza, Spencer Ryznar, Daigh Burgess, Kyra Natividad, Ankit Kaur ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/archive.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const archive = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-059bfb27"]]);

export { archive as default };
//# sourceMappingURL=archive-UylVgjW4.mjs.map

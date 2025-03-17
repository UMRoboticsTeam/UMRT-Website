import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { mergeProps, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { S as Section } from './server.mjs';

const _sfc_main$1 = {
  __name: "Sponsor",
  __ssrInlineRender: true,
  props: {
    imgSrc: { type: String, required: true },
    href: { type: String, required: false },
    tooltip: { type: String, required: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "col d-flex align-self-center justify-content-center",
        style: { "margin": "20px 0px" }
      }, _attrs))}>`);
      if (__props.href) {
        _push(`<a${ssrRenderAttr("href", __props.href)} target="."${ssrRenderAttr("title", __props.tooltip)}><img class="img-fluid"${ssrRenderAttr("src", __props.imgSrc)}></a>`);
      } else {
        _push(`<a${ssrRenderAttr("title", __props.tooltip)}><img class="img-fluid"${ssrRenderAttr("src", __props.imgSrc)}></a>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sponsor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LOGO_EEF = "" + buildAssetsURL("EngineeringEndowmentFundColour.DGV7-vZb.png");
const LOGO_FOE = "" + buildAssetsURL("FOE_logo_cropped.CnN3rmZL.png");
const LOGO_PTX = "" + buildAssetsURL("PTx_Trim_RGB.Bdt-W2dx.svg");
const LOGO_G3 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!--%20Created%20with%20Inkscape%20(http://www.inkscape.org/)%20--%3e%3csvg%20version='1.1'%20id='svg2'%20width='316.34668'%20height='133.38667'%20viewBox='0%200%20316.34668%20133.38667'%20sodipodi:docname='G3_Symbol_Colour.eps'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3cdefs%20id='defs6'%20/%3e%3csodipodi:namedview%20id='namedview4'%20pagecolor='%23ffffff'%20bordercolor='%23000000'%20borderopacity='0.25'%20inkscape:showpageshadow='2'%20inkscape:pageopacity='0.0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20/%3e%3cg%20id='g8'%20inkscape:groupmode='layer'%20inkscape:label='ink_ext_XXXXXX'%20transform='matrix(1.3333333,0,0,-1.3333333,0,133.38667)'%3e%3cg%20id='g10'%20transform='scale(0.1)'%3e%3cpath%20d='m%201494.95,478.848%2027.03,126.23%20h%20-211.92%20l%2020.34,95.371%20h%20373.41%20l%20-67.59,-320.097%20h%20-341.16%20c%20-206.86,0%20-310.341,64.375%20-310.341,193.125%200,20.566%202.82,42.89%208.269,66.894%2021.082,100.176%2068.422,173.027%20142.072,218.652%2066.1,41.082%20157.74,61.641%20275,61.641%20h%20340.36%20l%20-19.54,-93.984%20h%20-341.09%20c%20-57.11,0%20-102.25,-11.992%20-135.27,-36.028%20-40.08,-28.593%20-67.41,-76.64%20-81.93,-144.257%20-4.52,-22.059%20-6.75,-41.317%20-6.75,-57.918%200,-73.125%2050.12,-109.629%20150.28,-109.629%20h%20178.83'%20style='fill:%234e5156;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path12'%20/%3e%3cpath%20d='m%202050.2,380.352%20h%20-377.19%20l%2019.53,92.48%20h%20310.34%20c%2082.12,0%20127.71,21.973%20136.75,66.094%201.51,5%202.21,9.512%202.21,13.543%200,35.039%20-37.03,52.609%20-111.15,52.609%20H%201872.7%20l%2019.53,92.363%20h%20154.2%20c%2092.17,0%20138.22,25.829%20138.22,77.391%200,35.559%20-36.77,53.352%20-110.41,53.352%20h%20-305.8%20l%2019.51,92.48%20h%20360.65%20c%20149.28,0%20223.96,-37.363%20223.96,-111.992%200,-10.039%20-1.25,-21.27%20-3.79,-33.84%20-4.04,-18.543%20-11.23,-34.285%20-21.79,-47.293%20-20.04,-24.551%20-55.9,-50.351%20-107.44,-77.453%2053.61,-24.52%2080.43,-56.805%2080.43,-96.902%200,-8.516%20-1.06,-17.754%20-3.01,-27.813%20-9.55,-44.062%20-35.12,-78.633%20-76.66,-103.672%20-46.08,-27.551%20-109.46,-41.347%20-190.1,-41.347'%20style='fill:%234e5156;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path14'%20/%3e%3cpath%20d='M%201813.77,237.09%20C%20394.895,87.6563%20773.496,834.16%201080,972.129%20334.59,927.93%20161.973,-234.789%201813.77,237.09'%20style='fill:%233f8129;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path16'%20/%3e%3cpath%20d='M%20660.352,0%20C%20118.418,239.227%20406.797,928.828%20961.895,993.535%20153.855,961.805%20-70.4688,127.93%20660.352,0'%20style='fill:%233f8129;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path18'%20/%3e%3cpath%20d='M%2060.957,268.582%20C%20-63.6797,666.551%20496.238,1023.14%20802.473,993.301%20268.762,1058.14%20-164.297,666.551%2060.957,268.582'%20style='fill:%233f8129;fill-opacity:1;fill-rule:nonzero;stroke:none'%20id='path20'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const LOGO_MD = "" + buildAssetsURL("MacDon_RGB.IoVHrnsj.svg");
const LOGO_7O = "" + buildAssetsURL("SevenOaksColour.gSznUkvz.svg");
const LOGO_NFI = "" + buildAssetsURL("NFI_Group_logo_2019.Db-7HYHe.svg");
const LOGO_SW = "" + buildAssetsURL("SolidWorks_RedOnTransparent.ZTyVKeDY.png");
const LOGO_AL = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%20742.26447%20161.35544'%20version='1.1'%20sodipodi:docname='Altium_Logo_BLK.svg'%20width='742.26447'%20height='161.35544'%20inkscape:export-filename='Altium_Logo_BLK.png'%20inkscape:export-xdpi='96'%20inkscape:export-ydpi='96'%20inkscape:version='1.3.2%20(091e20e,%202023-11-25,%20custom)'%20xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'%20xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:svg='http://www.w3.org/2000/svg'%3e%3csodipodi:namedview%20id='namedview7'%20pagecolor='%23505050'%20bordercolor='%23eeeeee'%20borderopacity='1'%20inkscape:showpageshadow='0'%20inkscape:pageopacity='0'%20inkscape:pagecheckerboard='0'%20inkscape:deskcolor='%23d1d1d1'%20inkscape:zoom='0.62752525'%20inkscape:cx='84.458752'%20inkscape:cy='219.11469'%20inkscape:window-width='1920'%20inkscape:window-height='991'%20inkscape:window-x='-9'%20inkscape:window-y='-9'%20inkscape:window-maximized='1'%20inkscape:current-layer='Layer_1'%20/%3e%3cdefs%20id='defs1'%3e%3cstyle%20id='style1'%3e.cls-1{fill:%23010101;}%3c/style%3e%3c/defs%3e%3cpath%20class='cls-1'%20d='m%20201.31,0%20h%2044.78%20l%20-39.76,158.41%20h%20-44.64%20z'%20id='path1'%20/%3e%3cpath%20class='cls-1'%20d='M%20267.26,1.58%20H%20312%20l%20-9.52,36.75%20h%2018.62%20l%20-6.63,26.92%20h%20-18.75%20l%20-14.24,57.22%20q%20-2.31,9.54%208.86,9.42%20h%207.46%20l%20-6.68,26.6%20q%20-13.51,1.13%20-25.31,1.14%20c%20-13.64,0.13%20-22.88,-1.63%20-27.73,-5.35%20q%20-8.18,-5.7%20-3.05,-25%20z'%20id='path2'%20/%3e%3cpath%20class='cls-1'%20d='m%20337.64,38.35%20h%2044.77%20l%20-30.12,120.06%20h%20-44.65%20z'%20id='path3'%20/%3e%3cpath%20class='cls-1'%20d='m%20402.74,38.37%20h%2044.79%20l%20-19.85,79.22%20q%20-3.85,14.43%208.82,14.32%20c%208.74,0.08%2014.31,-4.7%2016.78,-14.32%20l%2019.85,-79.22%20h%2044.74%20l%20-30,120.07%20h%20-44.64%20l%203.52,-14.53%20h%20-0.5%20q%20-13.53,17.46%20-38,17.44%20c%20-10.29,0.13%20-18.19,-2.07%20-23.71,-6.68%20-5.9,-4.52%20-7.41,-13.09%20-4.5,-25.61%20z'%20id='path4'%20/%3e%3cpath%20class='cls-1'%20d='m%20714.57,41.5%20c%20-5.83,-4.4%20-14,-6.54%20-24.58,-6.48%20a%2056.69,56.69%200%200%200%20-20.94,4.08%2046.37,46.37%200%200%200%20-18.9,14.43%20c%20-1.1,-6.22%20-3.93,-10.86%20-8.5,-14%20-4.57,-3.14%20-11.73,-4.55%20-21.29,-4.55%20q%20-24.58,0%20-38.3,17.93%20h%20-0.51%20l%203.58,-14.64%20H%20540%20l%20-30.15,120.09%20h%2044.82%20l%2019.87,-79.22%20q%203.69,-14.43%2016.64,-14.22%2012.86,-0.21%209,14.24%20l%20-19.87,79.2%20H%20625%20l%2019.88,-79.22%20q%203.75,-14.43%2017,-14.22%20c%208.64,-0.14%2011.61,4.6%209,14.22%20l%20-19.78,79.22%20h%2019.74%20c%2014,0%2027.35,-9.28%2030.48,-22%20l%2017.19,-68.62%20c%203,-12.56%201.71,-21.32%20-3.94,-26.24%20z'%20id='path5'%20/%3e%3cpath%20class='cls-1'%20d='M%20152.23,158.41%20146.23,0%20H%20119.56%20C%2097.32,0.81%2078.65,13%2068.09,31.49%20L%200,158.41%2051.5,158.36%2063.57,130.89%20h%2038.56%20l%20-1.5,27.52%20z%20m%20-75.3,-57.89%2030.5,-66.08%20-3.63,66.08%20z'%20id='path6'%20/%3e%3cpath%20class='cls-1'%20d='m%20742.26,146.31%20a%2012.24,12.24%200%201%201%20-12.2,-11.91%2012,12%200%200%201%2012.2,11.91%20z%20m%20-21.42,0%20a%209.22,9.22%200%200%200%209.29,9.51%209.12,9.12%200%200%200%209.08,-9.44%20c%200,-5.3%20-3.85,-9.59%20-9.15,-9.59%20a%209.26,9.26%200%200%200%20-9.22,9.52%20z%20m%207.33,6.24%20h%20-2.76%20v%20-11.91%20a%2024.06,24.06%200%200%201%204.59,-0.39%207.43,7.43%200%200%201%204.14,0.87%203.32,3.32%200%200%201%201.16,2.62%203.07,3.07%200%200%201%20-2.47,2.76%20v%200.14%20a%203.54,3.54%200%200%201%202.18,2.91%209,9%200%200%200%200.87,3%20h%20-3%20a%2010.11,10.11%200%200%201%20-0.94,-2.9%20c%20-0.22,-1.31%20-1,-1.89%20-2.47,-1.89%20h%20-1.31%20z%20m%200.07,-6.75%20h%201.31%20c%201.53,0%202.76,-0.51%202.76,-1.74%200,-1.23%20-0.8,-1.82%20-2.54,-1.82%20a%206.23,6.23%200%200%200%20-1.53,0.15%20z'%20id='path7'%20/%3e%3c/svg%3e";
const LOGO_OB = "" + buildAssetsURL("Outstanding_Branding_Primary_Horizontal.CBKk0Nao.png");
const LOGO_RAM = "" + buildAssetsURL("RAM_LOGO_v3_Transparent.DApgNgjh.png");
const LOGO_OS = "" + buildAssetsURL("onshape-logo-RGB_color_cropped.syh5GPGc.png");
const _sfc_main = {
  __name: "Sponsors",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Section, mergeProps({ theme: "light" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="mt-0"${_scopeId}>Our Sponsors</h2><hr class="divider divider-light"${_scopeId}><div class="row row-cols-1 row-cols-lg-2 d-flex justify-content-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, { imgSrc: unref(LOGO_EEF) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { imgSrc: unref(LOGO_FOE) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              imgSrc: unref(LOGO_PTX),
              href: "https://www.ptxtrimble.com/",
              tooltip: "PTX Trimble Website"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              imgSrc: unref(LOGO_G3),
              href: "https://www.g3.ca/",
              tooltip: "G3 Website"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              imgSrc: unref(LOGO_MD),
              href: "https://www.macdon.com/",
              tooltip: "MacDon Website"
            }, null, _parent2, _scopeId));
            _push2(`</div><hr class="divider divider-light"${_scopeId}><div class="row row-cols-2 row-cols-lg-4 d-flex justify-content-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, { imgSrc: unref(LOGO_7O) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { imgSrc: unref(LOGO_NFI) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { imgSrc: unref(LOGO_OB) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, {
              imgSrc: unref(LOGO_RAM),
              href: "https://ramb.ca/",
              tooltip: "Radio Amateurs of Manitoba Website"
            }, null, _parent2, _scopeId));
            _push2(`</div><hr class="divider divider-light"${_scopeId}><div class="row row-cols-3 row-cols-lg-6 d-flex justify-content-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, { imgSrc: unref(LOGO_OS) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { imgSrc: unref(LOGO_SW) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { imgSrc: unref(LOGO_AL) }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("h2", { class: "mt-0" }, "Our Sponsors"),
              createVNode("hr", { class: "divider divider-light" }),
              createVNode("div", { class: "row row-cols-1 row-cols-lg-2 d-flex justify-content-center" }, [
                createVNode(_sfc_main$1, { imgSrc: unref(LOGO_EEF) }, null, 8, ["imgSrc"]),
                createVNode(_sfc_main$1, { imgSrc: unref(LOGO_FOE) }, null, 8, ["imgSrc"]),
                createVNode(_sfc_main$1, {
                  imgSrc: unref(LOGO_PTX),
                  href: "https://www.ptxtrimble.com/",
                  tooltip: "PTX Trimble Website"
                }, null, 8, ["imgSrc"]),
                createVNode(_sfc_main$1, {
                  imgSrc: unref(LOGO_G3),
                  href: "https://www.g3.ca/",
                  tooltip: "G3 Website"
                }, null, 8, ["imgSrc"]),
                createVNode(_sfc_main$1, {
                  imgSrc: unref(LOGO_MD),
                  href: "https://www.macdon.com/",
                  tooltip: "MacDon Website"
                }, null, 8, ["imgSrc"])
              ]),
              createVNode("hr", { class: "divider divider-light" }),
              createVNode("div", { class: "row row-cols-2 row-cols-lg-4 d-flex justify-content-center" }, [
                createVNode(_sfc_main$1, { imgSrc: unref(LOGO_7O) }, null, 8, ["imgSrc"]),
                createVNode(_sfc_main$1, { imgSrc: unref(LOGO_NFI) }, null, 8, ["imgSrc"]),
                createVNode(_sfc_main$1, { imgSrc: unref(LOGO_OB) }, null, 8, ["imgSrc"]),
                createVNode(_sfc_main$1, {
                  imgSrc: unref(LOGO_RAM),
                  href: "https://ramb.ca/",
                  tooltip: "Radio Amateurs of Manitoba Website"
                }, null, 8, ["imgSrc"])
              ]),
              createVNode("hr", { class: "divider divider-light" }),
              createVNode("div", { class: "row row-cols-3 row-cols-lg-6 d-flex justify-content-center" }, [
                createVNode(_sfc_main$1, { imgSrc: unref(LOGO_OS) }, null, 8, ["imgSrc"]),
                createVNode(_sfc_main$1, { imgSrc: unref(LOGO_SW) }, null, 8, ["imgSrc"]),
                createVNode(_sfc_main$1, { imgSrc: unref(LOGO_AL) }, null, 8, ["imgSrc"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sponsors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Sponsors-Gp-UJ9h9.mjs.map

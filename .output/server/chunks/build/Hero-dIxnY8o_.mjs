import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ref, watchEffect, watch, getCurrentInstance, computed, unref, useSSRContext } from 'vue';
import { i as injectHead, r as resolveUnrefHeadInput, _ as _export_sfc } from './server.mjs';
import { composableNames } from '@unhead/shared';
import { ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  getCurrentInstance();
  return entry;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const _imports_0 = "" + buildAssetsURL("umrt-logo-transparent.Cwn9IO6X.png");
const _sfc_main = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: true },
    imgSrc: { type: String, required: true },
    showLogo: { type: String, required: false, default: "false" },
    backgroundPosition: { type: String, default: "center" }
  },
  setup(__props) {
    const props = __props;
    const heroStyle = computed(() => ({
      // background: `linear-gradient(to bottom, rgba(5, 34, 91, 0.7) 0%, rgba(5, 34, 91, 0.85) 100%), url(${props.imgSrc})`,
      // background: `linear-gradient(to bottom, rgba(99, 109, 128, 0.7) 0%, rgba(52, 58, 69, 0.9) 100%), url(${props.imgSrc})`,
      background: `linear-gradient(to bottom, 
    rgba(99, 109, 128, 0.7) 0%, 
    rgba(52, 58, 69, 0.9) 95%,
    rgba(52, 58, 69, 1) 100%
    ), url(${props.imgSrc})`,
      // background: `url(${props.src})`,
      // backgroundPosition: 'center',
      backgroundPosition: props.backgroundPosition,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "scroll",
      // height: '80vh'
      // boxShadow: 'inset 0px -32px 16px -16px #F8F9FA'
      position: "fixed",
      width: "100%"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="masthead" style="${ssrRenderStyle(unref(heroStyle))}" data-v-bc105822><div class="container px-4 px-lg-5 h-80" data-v-bc105822><div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center" loading="lazy" data-v-bc105822></div></div></div><div class="mastheadHolder" data-v-bc105822><div class="container px-4 px-lg-5 h-80" data-v-bc105822><div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center" data-v-bc105822>`);
      if (__props.showLogo == "true") {
        _push(`<div class="col-lg-5 align-self-end" data-v-bc105822><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" style="${ssrRenderStyle({ "max-height": "50vh" })}" alt="" data-v-bc105822></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showLogo == "true") {
        _push(`<div class="col-lg-8 align-self-baseline" data-v-bc105822><h1 class="text-white font-weight-bold" data-v-bc105822>${ssrInterpolate(__props.title)}</h1>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showLogo != "true") {
        _push(`<div data-v-bc105822><h1 class="text-white font-weight-bold" data-v-bc105822>${ssrInterpolate(__props.title)}</h1>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc105822"]]);

export { __nuxt_component_0 as _, useHead as u };
//# sourceMappingURL=Hero-dIxnY8o_.mjs.map

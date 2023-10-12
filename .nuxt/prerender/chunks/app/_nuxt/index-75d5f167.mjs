import { useSSRContext, defineComponent, mergeProps, ref, watchEffect } from 'file:///Users/yexue/Documents/continue/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file:///Users/yexue/Documents/continue/node_modules/vue/server-renderer/index.mjs';
import { u as useLoginDialog, a as useToken } from './useToken-65e8b6fe.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/js-cookie/dist/js.cookie.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/unctx/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/defu/dist/defu.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/unhead/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/h3/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/ufo/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/@vueuse/core/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/@vue/shared/index.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/destr/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/scule/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/klona/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/ohash/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/yexue/Documents/continue/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/yexue/Documents/continue/node_modules/pathe/dist/index.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ContiInfo",
  __ssrInlineRender: true,
  setup(__props) {
    useLoginDialog();
    const isLogin = ref(false);
    watchEffect(() => {
      isLogin.value = !!useToken().getToken().value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-[320px] space-x-60 flex" }, _attrs))}><div class="w-[733px] rounded-2xl shadow-lg bg-white h-full"></div><div class="bg-white rounded-2xl shadow-lg h-full w-[333px] flex flex-col items-center space-y-32">`);
      if (!isLogin.value) {
        _push(`<button class="h-10 bg-[#1e90ff] w-44 rounded-xl text-white text-lg font-bold"> \u767B\u9646/\u6CE8\u518C </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/ContiInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContiCourseCard",
  __ssrInlineRender: true,
  props: ["title", "author", "imgSrc"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({ href: "" }, _attrs))} data-v-4c18b8b9><div class="card flex flex-col cursor-pointer rounded-xl bg-white w-[224px] h-[260px] hover:shadow-2xl" data-v-4c18b8b9><img class="bg-cover rounded-xl pointer-events-none bg-center"${ssrRenderAttr("src", __props.imgSrc)} alt="" data-v-4c18b8b9><div class="m-4" data-v-4c18b8b9><p class="font-bold text-[16px]" data-v-4c18b8b9>${ssrInterpolate(__props.title)}</p><p class="mt-2 text-[12px] text-[#666]" data-v-4c18b8b9>${ssrInterpolate(__props.author)}</p></div></div></a>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/ContiCourseCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContiCourseCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4c18b8b9"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContiOnLineStudy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><p class="text-2xl ml-7 text-primary">\u5728\u7EBF\u5B66\u4E60</p><div class="flex space-x-8">`);
      _push(ssrRenderComponent(ContiCourseCard, {
        title: "Java\u6838\u5FC3\u6280\u672F",
        author: "\u534E\u4E1C\u5E08\u8303\u5927\u5B66",
        imgSrc: "/img/java.png",
        href: "https://www.icourse163.org/course/ECNU-1002842004#/info"
      }, null, _parent));
      _push(ssrRenderComponent(ContiCourseCard, {
        title: "\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5",
        author: "\u6E05\u534E\u5927\u5B66",
        imgSrc: "/img/data.png",
        href: "https://kaoyan.icourse163.org/course/terms/1464402452.htm?outVendor=zw_mooc_pckcjsyxgkc&courseId=1463575164"
      }, null, _parent));
      _push(ssrRenderComponent(ContiCourseCard, {
        title: "Java\u6838\u5FC3\u6280\u672F",
        author: "\u534E\u4E1C\u5E08\u8303\u5927\u5B66",
        imgSrc: "/img/java.png",
        href: "https://www.icourse163.org/course/ECNU-1002842004#/info"
      }, null, _parent));
      _push(ssrRenderComponent(ContiCourseCard, {
        title: "\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5",
        author: "\u6E05\u534E\u5927\u5B66",
        imgSrc: "/img/data.png",
        href: "https://kaoyan.icourse163.org/course/terms/1464402452.htm?outVendor=zw_mooc_pckcjsyxgkc&courseId=1463575164"
      }, null, _parent));
      _push(ssrRenderComponent(ContiCourseCard, {
        title: "Java\u6838\u5FC3\u6280\u672F",
        author: "\u534E\u4E1C\u5E08\u8303\u5927\u5B66",
        imgSrc: "/img/java.png",
        href: "https://www.icourse163.org/course/ECNU-1002842004#/info"
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/ContiOnLineStudy.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col mt-4 w-[1244px] min-w-[1244px] content-between space-y-8 mx-auto z-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-75d5f167.mjs.map

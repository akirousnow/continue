import { defineComponent, ref, watchEffect, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useLoginDialog, a as useToken } from "./useToken-65e8b6fe.js";
import { _ as _export_sfc } from "../server.mjs";
import "js-cookie";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@vue/devtools-api";
import "@vueuse/core";
import "@vue/shared";
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
        _push(`<button class="h-10 bg-[#1e90ff] w-44 rounded-xl text-white text-lg font-bold"> 登陆/注册 </button>`);
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
const ContiCourseCard_vue_vue_type_style_index_0_scoped_4c18b8b9_lang = "";
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
      _push(`<!--[--><p class="text-2xl ml-7 text-primary">在线学习</p><div class="flex space-x-8">`);
      _push(ssrRenderComponent(ContiCourseCard, {
        title: "Java核心技术",
        author: "华东师范大学",
        imgSrc: "/img/java.png",
        href: "https://www.icourse163.org/course/ECNU-1002842004#/info"
      }, null, _parent));
      _push(ssrRenderComponent(ContiCourseCard, {
        title: "数据结构与算法",
        author: "清华大学",
        imgSrc: "/img/data.png",
        href: "https://kaoyan.icourse163.org/course/terms/1464402452.htm?outVendor=zw_mooc_pckcjsyxgkc&courseId=1463575164"
      }, null, _parent));
      _push(ssrRenderComponent(ContiCourseCard, {
        title: "Java核心技术",
        author: "华东师范大学",
        imgSrc: "/img/java.png",
        href: "https://www.icourse163.org/course/ECNU-1002842004#/info"
      }, null, _parent));
      _push(ssrRenderComponent(ContiCourseCard, {
        title: "数据结构与算法",
        author: "清华大学",
        imgSrc: "/img/data.png",
        href: "https://kaoyan.icourse163.org/course/terms/1464402452.htm?outVendor=zw_mooc_pckcjsyxgkc&courseId=1463575164"
      }, null, _parent));
      _push(ssrRenderComponent(ContiCourseCard, {
        title: "Java核心技术",
        author: "华东师范大学",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-75d5f167.js.map

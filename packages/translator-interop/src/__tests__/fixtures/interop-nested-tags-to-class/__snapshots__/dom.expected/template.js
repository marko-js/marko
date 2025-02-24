import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
_$.register("__tests__/components/class-layout.marko", _classLayout);
const _count$classLayout_content_effect = _$.effect("__tests__/template.marko_1_count", (_scope, {
  _: {
    count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope._, count + 1), count;
}));
const _count$classLayout_content = _$.registerDynamicClosure("__tests__/template.marko_1_count/subscriber", "count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$classLayout_content_effect(_scope);
});
const _setup$classLayout_content = _scope => {
  _count$classLayout_content._(_scope);
};
const _classLayout_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<button id=tags> </button>", /* get, next(1), get */" D ", _setup$classLayout_content));
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _classLayout_content);
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => _count$classLayout_content(_scope));
export function _setup_(_scope) {
  _count(_scope, 0);
  _dynamicTag(_scope, _classLayout);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
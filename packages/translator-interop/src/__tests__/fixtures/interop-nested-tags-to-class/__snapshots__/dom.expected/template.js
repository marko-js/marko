import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classLayout from "./components/class-layout.marko";
import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
_$.register("__tests__/components/class-layout.marko", _classLayout);
const _count$classLayout_content_effect = _$.effect("__tests__/template.marko_1_count", (_scope, {
  _: {
    count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope._, count + 1), count;
}));
const _count$classLayout_content = _$.registerSubscriber("__tests__/template.marko_1_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$classLayout_content_effect(_scope);
}));
const _classLayout_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<button id=tags> </button>", /* get, next(1), get */" D ", void 0, () => [_count$classLayout_content]));
const _classLayout_input = _$.dynamicTagAttrs("#text/0", _classLayout_content);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _classLayout_input(_scope, () => ({})), () => _classLayout_input);
const _count = /* @__PURE__ */_$.state("count", 0, () => _$.dynamicSubscribers("count"));
export function _setup_(_scope) {
  _count(_scope, 0);
  _dynamicTagName(_scope, _classLayout || _classLayout_content(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$falseChild_content_effect = _$.effect("__tests__/template.marko_1_count", (_scope, {
  _: {
    count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope._, count + 1), count;
}));
const _count$falseChild_content = _$.registerSubscriber("__tests__/template.marko_1_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$falseChild_content_effect(_scope);
}));
const _falseChild_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<button> </button>", /* get, next(1), get */" D ", void 0, () => [_count$falseChild_content]));
const _falseChild_input = _$.dynamicTagAttrs("#text/0", _falseChild_content);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _falseChild_input(_scope, () => ({})), () => _falseChild_input);
const _count = /* @__PURE__ */_$.state("count", 0, () => _$.dynamicSubscribers("count"));
export function _setup_(_scope) {
  _count(_scope, 0);
  _dynamicTagName(_scope, false || Child || _falseChild_content(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
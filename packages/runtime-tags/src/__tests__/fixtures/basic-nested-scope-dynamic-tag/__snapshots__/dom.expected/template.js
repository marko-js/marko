export const _template = "<!><!><!>";
export const _walks = /* replace, over(1) */"D%bD";
import Child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count$falseChild_content_effect = _$.effect("__tests__/template.marko_1_count", (_scope, {
  _: {
    count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope._, count + 1), count;
}));
const _count$falseChild_content = /* @__PURE__ */_$.dynamicClosureRead("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$falseChild_content_effect(_scope);
});
const _falseChild_content = _$.registerContent("__tests__/template.marko_1_renderer", "<button> </button>", /* get, next(1), get */" D ", 0, 0, _scope => _count$falseChild_content(_scope));
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _falseChild_content);
const _count_closure = /* @__PURE__ */_$.dynamicClosure(_count$falseChild_content);
const _count = /* @__PURE__ */_$.state("count/1", _count_closure);
export function _setup(_scope) {
  _count(_scope, 0);
  _dynamicTag(_scope, false || Child);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
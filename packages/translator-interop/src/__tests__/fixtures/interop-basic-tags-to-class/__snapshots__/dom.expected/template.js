import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const _template = "<button id=tags> </button><!><!>";
export const _walks = /* get, next(1), get, out(1), replace, over(1) */" D l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import _classCounter from "./components/class-counter.marko";
_$.register("__tests__/components/class-counter.marko", _classCounter);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2");
const _count_effect = _$.effect("__tests__/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count/3", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _dynamicTag(_scope, _classCounter, () => ({
    count: count
  }));
  _count_effect(_scope);
});
export function _setup(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
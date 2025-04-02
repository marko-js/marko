import "marko/src/runtime/helpers/tags-compat/dom-debug.mjs";
export const _template = "<!><!><div id=tags-api> </div>";
export const _walks = /* replace, over(1), next(1), get, out(1) */"D%bD l";
import _classCounter from "./components/class-counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.register("__tests__/components/class-counter.marko", _classCounter);
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const _count = /* @__PURE__ */_$.state("count/2", (_scope, count) => _$.data(_scope["#text/1"], count));
export function _setup(_scope) {
  _count(_scope, 0);
  _dynamicTag(_scope, _classCounter, () => ({
    onCount: _onCount(_scope)
  }));
}
function _onCount(_scope) {
  return function (newCount) {
    _count(_scope, newCount);
  };
}
_$.register("__tests__/template.marko_0/onCount", _onCount);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
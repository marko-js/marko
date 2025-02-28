export const _template_ = "<!><!><button class=reset>reset</button>";
export const _walks_ = /* dynamicTagWithVar, over(1), get, over(1) */"D1b b";
import Counter from "./tags/counter.marko";
const getCounter = _getCounter;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", 0, () => _count);
const _count = _$.registerBoundSignal("__tests__/template.marko_0_count/var", (_scope, count) => {});
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => _$.on(_scope["#button/2"], "click", function () {
  _$.tagVarSignalChange(_scope["#text/0!"], 0);
}));
export function _setup_(_scope) {
  _dynamicTag(_scope, getCounter());
  _setup__effect(_scope);
}
function _getCounter() {
  return Counter; // breaks tag name analysis.
}
_$.register("__tests__/template.marko_0/getCounter", _getCounter);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
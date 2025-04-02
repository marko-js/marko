export const _template = "<button class=inc> </button>";
export const _walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x_effect = _$.effect("__tests__/tags/child.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x/2", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _$.tagVarSignal(_scope, x);
  _x_effect(_scope);
});
export function _setup(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup);
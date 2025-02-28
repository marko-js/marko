export const _template_ = "<div id=ref>0</div>";
export const _walks_ = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x_effect = _$.effect("__tests__/template.marko_0_x", ({
  "x/0": x
}) => (document.getElementById("ref").textContent = x));
const _x = /* @__PURE__ */_$.state("x/0", (_scope, x) => _x_effect(_scope));
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
export const _template = "<div id=ref>0</div>";
export const _walks = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x_effect = _$.effect("__tests__/template.marko_0_x", ({
  x
}) => (document.getElementById("ref").textContent = x));
const _x = /* @__PURE__ */_$.state("x/0", _scope => _x_effect(_scope));
export function _setup(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
export const _template_ = "<div id=ref>0</div>";
export const _walks_ = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/effect-tag/template.marko_0_x", ({
  x
}) => document.getElementById("ref").textContent = x);
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _x_effect(_scope));
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/effect-tag/template.marko", _template_, _walks_, _setup_);
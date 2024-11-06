export const _template_ = "<div id=ref>0</div>";
export const _walks_ = /* over(1) */"b";
import { effect as _effect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _x_effect = _effect("packages/translator-tags/src/__tests__/fixtures/effect-tag/template.marko_0_x", _scope => {
  const {
    x
  } = _scope;
  document.getElementById("ref").textContent = x;
});
const _x = /* @__PURE__ */_state("x", (_scope, x) => _x_effect(_scope));
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/effect-tag/template.marko");
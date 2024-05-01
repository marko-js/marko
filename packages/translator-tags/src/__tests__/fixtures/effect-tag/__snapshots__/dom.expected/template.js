import { register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/effect-tag/template.marko_0_x", _scope => {
  const {
    x
  } = _scope;
  document.getElementById("ref").textContent = x;
});
const _x = /* @__PURE__ */_value("x", (_scope, x) => _queueEffect(_scope, _x_effect));
const _setup = _scope => {
  _x(_scope, 1);
};
export const _template_ = "<div id=ref>0</div>";
export const _walks_ = /* over(1) */"b";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/effect-tag/template.marko");
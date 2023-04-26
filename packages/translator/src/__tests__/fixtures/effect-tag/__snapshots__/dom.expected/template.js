import { register as _register, queueEffect as _queueEffect, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _x_effect = _register("packages/translator/src/__tests__/fixtures/effect-tag/template.marko_0_x", _scope => {
  const x = _scope["x"];
  document.getElementById("ref").textContent = x;
});
const _x = /* @__PURE__ */_value("x", (_scope, x) => _queueEffect(_scope, _x_effect));
const _setup = _scope => {
  _x(_scope, 1);
};
export const template = "<div id=ref>0</div>";
export const walks = /* over(1) */"b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/effect-tag/template.marko");
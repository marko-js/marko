import { register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _el_effect = _register("packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko_0_el", _scope => {
  const {
    el
  } = _scope;
  el().textContent = "hello";
});
const _el = /* @__PURE__ */_value("el", (_scope, el) => _queueEffect(_scope, _el_effect));
const _destructure2 = (_scope, {
  el
}) => {
  _el(_scope, el);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input));
export const args = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const template = "";
export const walks = "";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko");
import { register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _el__effect = _register("packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko_0_el", _scope => {
  const {
    el
  } = _scope;
  el().textContent = "hello";
});
export const _el_ = /* @__PURE__ */_value("el", (_scope, el) => _queueEffect(_scope, _el__effect));
const _destructure2 = (_scope, {
  el
}) => {
  _el_(_scope, el);
};
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input));
export const _template_ = "";
export const _walks_ = "";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input_(_scope, input, _clean);
}), "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko");
import { register as _register, queueEffect as _queueEffect, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _el_effect = _register("packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko_0_el", _scope => {
  const {
    el
  } = _scope;
  el().textContent = "hello";
});
const _el = /* @__PURE__ */_value("el", (_scope, el) => _queueEffect(_scope, _el_effect));
export const attrs = (_scope, _destructure, _dirty = true) => {
  let el;
  if (_dirty) ({
    el
  } = _destructure);
  _el(_scope, el, _dirty);
};
export { _el };
export const template = "";
export const walks = "";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko");
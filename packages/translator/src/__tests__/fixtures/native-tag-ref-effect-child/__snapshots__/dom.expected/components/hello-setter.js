import { register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _el_effect = _register("packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko_0_el", _scope => {
  const {
    el
  } = _scope;
  el().textContent = "hello";
});
const _el = /* @__PURE__ */_value("el", (_scope, el) => _queueEffect(_scope, _el_effect));
export const attrs = (_scope, _destructure, _clean) => {
  let el;
  if (!_clean) ({
    el
  } = _destructure);
  _el(_scope, el, _clean);
};
export { _el };
export const template = "";
export const walks = "";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko");
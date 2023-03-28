import { register as _register, queueHydrate as _queueHydrate, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_el = _register("packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko_0_el", _scope => {
  const el = _scope["el"];
  el().textContent = "hello";
});
const _el = /* @__PURE__ */_value("el", (_scope, el) => _queueHydrate(_scope, _hydrate_el));
export const attrs = (_scope, _destructure, _dirty = true) => {
  let el;
  if (_dirty) ({
    el
  } = _destructure);
  _el(_scope, el, _dirty);
};
export { _el as _apply_el };
export const template = "";
export const walks = "";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko");
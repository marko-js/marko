import { source as _source, register as _register, queueHydrate as _queueHydrate, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_el = _register("packages/translator/src/__tests__/fixtures/native-tag-ref-effect-child/components/hello-setter.marko_0_el", _scope => {
  const el = _scope["el"];
  el().textContent = "hello";
});
const _el = /* @__PURE__ */_source("el", [], (_scope, el) => _queueHydrate(_scope, _hydrate_el));
export const attrs = /* @__PURE__ */_destructureSources([_el], (_scope, {
  el
}) => {
  _setSource(_scope, _el, el);
});
export { _el as _apply_el };
export const template = "";
export const walks = "";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);
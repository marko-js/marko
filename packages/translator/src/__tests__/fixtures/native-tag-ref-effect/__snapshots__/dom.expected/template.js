import { register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_setup = _register("packages/translator/src/__tests__/fixtures/native-tag-ref-effect/template.marko_0", _scope => _scope["#div/0"].textContent = "hello");
const _setup = _scope => {
  _queueHydrate(_scope, _hydrate_setup);
};
export const template = "<div></div>";
export const walks = /* get, over(1) */" b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
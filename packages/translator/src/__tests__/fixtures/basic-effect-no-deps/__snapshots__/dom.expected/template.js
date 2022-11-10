import { register as _register, queueHydrate as _queueHydrate, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_setup = _register("packages/translator/src/__tests__/fixtures/basic-effect-no-deps/template.marko_0", _scope => document.body.className = "no-deps");
const _setup = _scope => {
  _queueHydrate(_scope, _hydrate_setup);
};
export const template = "";
export const walks = "";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
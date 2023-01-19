import { register as _register, queueHydrate as _queueHydrate, createRenderer as _createRenderer, conditional as _conditional, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _hydrate_setup$ifBody = _register("packages/translator/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko_1", _scope => _scope._[0].textContent = "hello");
const _setup$ifBody = _scope => {
  _queueHydrate(_scope, _hydrate_setup$ifBody);
};
const _ifBody = /* @__PURE__ */_createRenderer("", "", _setup$ifBody);
const _if = /* @__PURE__ */_conditional(1, 1, _scope => true ? _ifBody : null);
const _setup = _scope => {
  _notifySignal(_scope, _if);
};
export const template = "<div></div><!>";
export const walks = /* get, over(1), replace, over(1) */" b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
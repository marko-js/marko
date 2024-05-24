import { createRenderer as _createRenderer, register as _register, queueEffect as _queueEffect, conditional as _conditional, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup$ifBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko_1", _scope => _scope._["#div/0"].textContent = "hello");
const _setup$ifBody = _scope => {
  _queueEffect(_scope, _setup$ifBody_effect);
};
const _ifBody = /* @__PURE__ */_createRenderer("", "", _setup$ifBody);
const _if = /* @__PURE__ */_conditional("#text/1");
const _setup = _scope => {
  _if(_scope, true ? _ifBody : null);
};
export const _template_ = "<div></div><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-downstream-effect/template.marko");
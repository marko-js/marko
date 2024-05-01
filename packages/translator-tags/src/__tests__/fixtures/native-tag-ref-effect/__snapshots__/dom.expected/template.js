import { register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup_effect = _register("packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect/template.marko_0", _scope => _scope["#div/0"].textContent = "hello");
const _setup = _scope => {
  _queueEffect(_scope, _setup_effect);
};
export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect/template.marko");
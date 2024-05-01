import { register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-effect-no-deps/template.marko_0", _scope => document.body.className = "no-deps");
const _setup = _scope => {
  _queueEffect(_scope, _setup_effect);
};
export const _template_ = "";
export const _walks_ = "";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-effect-no-deps/template.marko");
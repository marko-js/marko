export const _template_ = "";
export const _walks_ = "";
import { effect as _effect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup__effect = _effect("packages/translator-tags/src/__tests__/fixtures/basic-effect-no-deps/template.marko_0", _scope => document.body.className = "no-deps");
export function _setup_(_scope) {
  _setup__effect(_scope);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-effect-no-deps/template.marko");
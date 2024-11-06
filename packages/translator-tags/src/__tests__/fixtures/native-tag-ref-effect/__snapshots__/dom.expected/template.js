export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
import { effect as _effect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup__effect = _effect("packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect/template.marko_0", _scope => _scope["#div/0"].textContent = "hello");
export function _setup_(_scope) {
  _setup__effect(_scope);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/native-tag-ref-effect/template.marko");
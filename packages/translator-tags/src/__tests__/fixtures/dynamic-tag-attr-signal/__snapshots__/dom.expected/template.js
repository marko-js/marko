export const _template_ = "<!><p>paragraph</p><button></button>";
export const _walks_ = /* get, over(1), get, over(1) */"D b b";
import { classAttr as _classAttr, on as _on, effect as _effect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    className
  } = _scope;
  return function () {
    _className(_scope, className === "A" ? "B" : "A");
  };
};
const _className_effect = _effect("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _className = /* @__PURE__ */_state("className", (_scope, className) => {
  _classAttr(_scope["#p/0"], className);
  _className_effect(_scope);
});
export function _setup_(_scope) {
  _className(_scope, "A");
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko");
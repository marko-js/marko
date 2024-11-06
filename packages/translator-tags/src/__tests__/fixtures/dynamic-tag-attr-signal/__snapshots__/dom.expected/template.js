export const _template_ = "<!><p>paragraph</p><button></button>";
export const _walks_ = /* get, over(1), get, over(1) */"D b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    className
  } = _scope;
  return function () {
    _className(_scope, className === "A" ? "B" : "A");
  };
};
const _className_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko_0_className", _scope => _$.on(_scope["#button/1"], "click", _onClick(_scope)));
const _className = /* @__PURE__ */_$.state("className", (_scope, className) => {
  _$.classAttr(_scope["#p/0"], className);
  _className_effect(_scope);
});
export function _setup_(_scope) {
  _className(_scope, "A");
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-attr-signal/template.marko");
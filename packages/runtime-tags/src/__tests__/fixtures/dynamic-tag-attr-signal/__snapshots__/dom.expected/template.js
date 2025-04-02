export const _template = "<!><p>paragraph</p><button></button>";
export const _walks = /* get, over(1), get, over(1) */"D b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _className_effect = _$.effect("__tests__/template.marko_0_className", (_scope, {
  className
}) => _$.on(_scope["#button/1"], "click", function () {
  _className(_scope, className === "A" ? "B" : "A");
}));
const _className = /* @__PURE__ */_$.state("className/2", (_scope, className) => {
  _$.classAttr(_scope["#p/0"], className);
  _className_effect(_scope);
});
export function _setup(_scope) {
  _className(_scope, "A");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
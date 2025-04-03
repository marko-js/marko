export const $template = "<!><p>paragraph</p><button></button>";
export const $walks = /* get, over(1), get, over(1) */"D b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $className_effect = _$.effect("__tests__/template.marko_0_className", ($scope, {
  className
}) => _$.on($scope["#button/1"], "click", function () {
  $className($scope, className === "A" ? "B" : "A");
}));
const $className = /* @__PURE__ */_$.state("className/2", ($scope, className) => {
  _$.classAttr($scope["#p/0"], className);
  $className_effect($scope);
});
export function $setup($scope) {
  $className($scope, "A");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
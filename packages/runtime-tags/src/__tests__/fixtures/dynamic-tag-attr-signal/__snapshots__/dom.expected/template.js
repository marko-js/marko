export const $template = "<!><p>paragraph</p><button></button>";
export const $walks = /* over(1), get, over(1), get, over(1) */"b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $className__script = _._script("__tests__/template.marko_0_className", $scope => _._on($scope["#button/1"], "click", function () {
  $className($scope, $scope.className === "A" ? "B" : "A");
}));
const $className = /* @__PURE__ */_._let("className/2", $scope => {
  _._attr_class($scope["#p/0"], $scope.className);
  $className__script($scope);
});
export function $setup($scope) {
  $className($scope, "A");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
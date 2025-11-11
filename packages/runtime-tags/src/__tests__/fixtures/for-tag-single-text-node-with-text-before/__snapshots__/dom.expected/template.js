export const $template = "<div>Before <!></div>";
export const $walks = /* get, next(1), over(1), replace, out(1) */" Db%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for = /* @__PURE__ */_._for_of("#text/1", "Child", /* over(1) */"b");
const $children__script = _._script("__tests__/template.marko_0_children", $scope => {
  if ($scope.children?.length === 1) {
    $children($scope, [...$scope.children, 2]);
  }
});
const $children = /* @__PURE__ */_._let("children/2", $scope => {
  $children_length($scope, $scope.children?.length);
  $for($scope, [$scope.children]);
  $children__script($scope);
});
const $children_length = /* @__PURE__ */_._const("children_length", $scope => _._attr($scope["#div/0"], "data-children", $scope.children_length));
export function $setup($scope) {
  $children($scope, [1]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
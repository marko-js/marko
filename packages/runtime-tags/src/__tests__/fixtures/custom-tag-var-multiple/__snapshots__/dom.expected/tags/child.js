export const $template = "<span>child</span>";
export const $walks = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_x_y = /* @__PURE__ */_$.intersection(2, $scope => {
  const {
    x,
    y
  } = $scope;
  _$.tagVarSignal($scope, x + y);
});
const $y = /* @__PURE__ */_$.state("y/1", $expr_x_y);
const $x = /* @__PURE__ */_$.state("x/0", $expr_x_y);
export function $setup($scope) {
  $x($scope, 1);
  $y($scope, 2);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup);
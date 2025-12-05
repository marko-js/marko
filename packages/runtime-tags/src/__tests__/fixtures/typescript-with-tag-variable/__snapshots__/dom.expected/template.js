export const $template = "<!>";
export const $walks = /* replace, over(1) */"%b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x = /* @__PURE__ */_._let("x/1", $scope => $x_y($scope, $scope.x?.y));
const $x_y = /* @__PURE__ */_._const("x_y", $scope => _._text($scope["#text/0"], $scope.x_y));
export function $setup($scope) {
  $x($scope, {
    y: "hello"
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
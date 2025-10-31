export const $template = "<div> </div><!>";
export const $walks = /* next(1), get, out(1), replace, over(1) */"D l%b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $z = /* @__PURE__ */_._let("z/2", $scope => {
  $x($scope, $scope.z.x);
  $y($scope, $scope.z.y);
});
const $x = /* @__PURE__ */_._const("x", $scope => _._text($scope["#text/0"], $scope.x));
const $y = /* @__PURE__ */_._const("y", $scope => _._text($scope["#text/1"], $scope.y));
export function $setup($scope) {
  $z($scope, {
    x: 1,
    y: 2
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
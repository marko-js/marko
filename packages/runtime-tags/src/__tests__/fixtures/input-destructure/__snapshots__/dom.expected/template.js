export const $template = "<!> <!>";
export const $walks = /* replace, over(2), replace, over(1) */"%c%b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $a = /* @__PURE__ */_._const("a", $scope => _._text($scope["#text/0"], $scope.a));
export const $b = /* @__PURE__ */_._const("b", $scope => _._text($scope["#text/1"], $scope.b));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $a($scope, $scope.input.a);
  $b($scope, $scope.input.b);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);
export const $template = "<div> </div><div> </div>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_a = /* @__PURE__ */_._const("input_a", $scope => _._text($scope["#text/0"], $scope.input_a));
export const $input_b = /* @__PURE__ */_._const("input_b", $scope => _._text($scope["#text/1"], $scope.input_b));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_a($scope, $scope.input.a);
  $input_b($scope, $scope.input.b);
});
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
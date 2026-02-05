export const $template = "<button>Increment</button><!> <!>";
export const $walks = /* get, over(1), replace, over(2), replace, over(1) */" b%c%b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $b__script = _._script("__tests__/template.marko_0_b", $scope => _._on($scope["#button/0"], "click", (() => $b($scope, $scope.b + 1) - 1)));
const $b = /* @__PURE__ */_._let("b/6", $scope => {
  _._text($scope["#text/2"], $scope.b);
  $b__script($scope);
});
export const $a = ($scope, a) => {
  _._text($scope["#text/1"], a);
  $b($scope, a * 2);
};
export const $input = ($scope, input) => $a($scope, input.a);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);
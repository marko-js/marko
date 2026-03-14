export const $template = "<!><button> </button>";
export const $walks = /* over(1), <Let/var>, get, next(1), get, out(1) */"b0& D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $Let_content__internal = /* @__PURE__ */_._let("internal/0", $scope => _._return($scope, $scope.internal));
const $Let_content__setup = /* @__PURE__ */_._child_setup($scope => {
  _._return_change($scope, $valueChange($scope));
  $Let_content__internal($scope, 0);
});
const $a__OR__b__script = _._script("__tests__/template.marko_0_a_b", $scope => _._on($scope["#button/2"], "click", function () {
  _._var_change($scope["#childScope/0"], $scope.a + 1, "a");
  $b($scope, $scope.b + 1);
}));
const $a__OR__b = /* @__PURE__ */_._or(6, $scope => {
  _._text($scope["#text/3"], `${$scope.a},${$scope.b}`);
  $a__OR__b__script($scope);
});
const $a = _._var_resume("__tests__/template.marko_0_a/var", /* @__PURE__ */_._const("a", $a__OR__b));
const $b = /* @__PURE__ */_._let("b/5", $a__OR__b);
export function $setup($scope) {
  _._var($scope, "#childScope/0", $a);
  $Let_content__setup._($scope["#childScope/0"], $scope);
  $b($scope, 0);
}
function $valueChange($scope) {
  return _new_internal => {
    $Let_content__internal($scope, _new_internal);
  };
}
_._resume("__tests__/template.marko_1/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
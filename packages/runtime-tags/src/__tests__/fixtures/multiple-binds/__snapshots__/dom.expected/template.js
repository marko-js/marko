export const $template = "<button><input><input></button>";
export const $walks = /* get, next(1), get, over(1), get, out(1) */" D b l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__OR__valueChange = /* @__PURE__ */_._or(5, $scope => {
  _._attr_input_value($scope, "#input/1", $scope.count, $scope.$valueChange);
  _._attr_input_value($scope, "#input/2", $scope.count, $scope.$valueChange);
});
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/3", $scope => {
  $count__OR__valueChange($scope);
  $count__script($scope);
});
const $valueChange3 = /* @__PURE__ */_._const("$valueChange", $count__OR__valueChange);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_input_value_script($scope, "#input/1");
  _._attr_input_value_script($scope, "#input/2");
});
export function $setup($scope) {
  $count($scope, 0);
  $valueChange3($scope, $valueChange2($scope));
  $setup__script($scope);
}
function $valueChange2($scope) {
  return (_new_count => {
    $count($scope, _new_count);
  });
}
_._resume("__tests__/template.marko_0/valueChange2", $valueChange2);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
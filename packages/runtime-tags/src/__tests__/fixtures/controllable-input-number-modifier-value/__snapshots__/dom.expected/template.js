export const $template = "<input type=number><span><!> <!></span>";
export const $walks = /* get, over(1), next(1), replace, over(2), replace, out(1) */" bD%c%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/3", $scope => {
  _._attr_input_value($scope, "#input/0", $scope.value, $valueChange($scope));
  _._text($scope["#text/1"], $scope.value);
  _._text($scope["#text/2"], typeof $scope.value);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._attr_input_value_script($scope, "#input/0"));
export function $setup($scope) {
  $value($scope, 0);
  $setup__script($scope);
}
function $valueChange($scope) {
  return _new_value => {
    $value($scope, parseInt(_new_value));
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
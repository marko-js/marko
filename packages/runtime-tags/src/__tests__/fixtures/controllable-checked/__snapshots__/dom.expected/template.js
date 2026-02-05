export const $template = "<input type=checkbox><span> </span>";
export const $walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $checked = /* @__PURE__ */_._let("checked/2", $scope => {
  _._attr_input_checked($scope, "#input/0", $scope.checked, $checkedChange($scope));
  _._text($scope["#text/1"], String($scope.checked));
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._attr_input_checked_script($scope, "#input/0"));
export function $setup($scope) {
  $checked($scope, false);
  $setup__script($scope);
}
function $checkedChange($scope) {
  return _new_checked => {
    $checked($scope, _new_checked);
  };
}
_._resume("__tests__/template.marko_0/checkedChange", $checkedChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
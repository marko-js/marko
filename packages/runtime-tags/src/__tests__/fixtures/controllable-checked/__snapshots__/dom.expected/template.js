export const $template = "<input type=checkbox><span> </span>";
export const $walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $checked = /* @__PURE__ */_$.state("checked/2", ($scope, checked) => {
  _$.controllable_input_checked($scope, "#input/0", checked, $checkedChange($scope));
  _$.data($scope["#text/1"], String(checked));
});
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.controllable_input_checked_effect($scope, "#input/0"));
export function $setup($scope) {
  $checked($scope, false);
  $setup_effect($scope);
}
function $checkedChange($scope) {
  return _new_checked => {
    $checked($scope, _new_checked);
  };
}
_$.register("__tests__/template.marko_0/checkedChange", $checkedChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
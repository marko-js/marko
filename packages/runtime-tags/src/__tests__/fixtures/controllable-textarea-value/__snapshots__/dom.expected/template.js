export const $template = "<textarea></textarea><span> </span>";
export const $walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_$.state("value/2", ($scope, value) => {
  _$.controllable_textarea_value($scope, "#textarea/0", value, $valueChange($scope));
  _$.data($scope["#text/1"], value);
});
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.controllable_textarea_value_effect($scope, "#textarea/0"));
export function $setup($scope) {
  $value($scope, "hello");
  $setup_effect($scope);
}
function $valueChange($scope) {
  return _new_value => {
    $value($scope, _new_value);
  };
}
_$.register("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
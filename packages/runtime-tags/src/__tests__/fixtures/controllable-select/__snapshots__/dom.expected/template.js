export const $template = "<select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select><span> </span>";
export const $walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/2", ($scope, value) => {
  _._attr_select_value($scope, "#select/0", value, $valueChange($scope));
  _._text($scope["#text/1"], value);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._attr_select_value_script($scope, "#select/0"));
export function $setup($scope) {
  $value($scope, "b");
  $setup__script($scope);
}
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
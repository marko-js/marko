export const $template = "<select><option></option><option value=a></option></select><select><option></option><option value=b></option></select><select><option></option><option value=b></option></select><select><option></option><option value=b></option></select><button>Update</button>";
export const $walks = /* get, over(1), get, over(1), get, over(1), get, over(1), get, over(1) */" b b b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/5", $scope => {
  _._attr_select_value_default($scope, "#select/2", $scope.value);
  _._attr_select_value($scope, "#select/3", $scope.value, undefined);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_select_value_script($scope, "#select/3");
  _._on($scope["#button/4"], "click", function () {
    $value($scope, "b");
  });
});
export function $setup($scope) {
  _._attr_select_value_default($scope, "#select/0", "a");
  _._attr_select_value_default($scope, "#select/1", "a");
  $value($scope, "a");
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
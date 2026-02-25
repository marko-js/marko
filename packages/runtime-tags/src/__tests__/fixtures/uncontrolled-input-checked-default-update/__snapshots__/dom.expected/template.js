export const $template = "<input type=checkbox><input type=checkbox><input type=checkbox><button>Update</button>";
export const $walks = /* over(1), get, over(1), get, over(1), get, over(1) */"b b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $checked = /* @__PURE__ */_._let("checked/3", $scope => {
  _._attr_input_checked_default($scope, "#input/0", $scope.checked);
  _._attr_input_checked($scope, "#input/1", $scope.checked, undefined);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_input_checked_script($scope, "#input/1");
  _._on($scope["#button/2"], "click", function () {
    $checked($scope, true);
  });
});
export function $setup($scope) {
  $checked($scope, false);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
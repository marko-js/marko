export const $template = "<input type=radio><input type=radio><input type=radio><input type=radio><button>Update</button>";
export const $walks = /* get, over(1), get, over(1), get, over(1), get, over(1), get, over(1) */" b b b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/5", $scope => {
  _._attr_input_checkedValue_default($scope, "#input/2", $scope.value, "b");
  _._attr_input_checkedValue($scope, "#input/3", $scope.value, undefined, "b");
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_input_checkedValue_script($scope, "#input/3");
  _._on($scope["#button/4"], "click", function () {
    $value($scope, "b");
  });
});
export function $setup($scope) {
  _._attr_input_checkedValue_default($scope, "#input/0", "a", "a");
  _._attr_input_checkedValue_default($scope, "#input/1", "a", "b");
  $value($scope, "a");
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
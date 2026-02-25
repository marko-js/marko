export const $template = "<input type=checkbox><input type=checkbox><input type=checkbox><input type=checkbox><button>Update</button>";
export const $walks = /* get, over(1), get, over(1), get, over(1), get, over(1), get, over(1) */" b b b b b";
const initialValue = ["a"];
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/5", $scope => {
  _._attr_input_checkedValue_default($scope, "#input/2", $scope.value, "b");
  _._attr_input_checkedValue($scope, "#input/3", $scope.value, undefined, "b");
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_input_checkedValue_script($scope, "#input/3");
  _._on($scope["#button/4"], "click", function () {
    $value($scope, ["a", "b"]);
  });
});
export function $setup($scope) {
  _._attr_input_checkedValue_default($scope, "#input/0", initialValue, "a");
  _._attr_input_checkedValue_default($scope, "#input/1", initialValue, "b");
  $value($scope, initialValue);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
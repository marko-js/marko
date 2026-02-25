export const $template = "<input value=a><input><input><button>Update</button>";
export const $walks = /* over(1), get, over(1), get, over(1), get, over(1) */"b b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/3", $scope => {
  _._attr_input_value_default($scope, "#input/0", $scope.value);
  _._attr_input_value($scope, "#input/1", $scope.value, undefined);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_input_value_script($scope, "#input/1");
  _._on($scope["#button/2"], "click", function () {
    $value($scope, "b");
  });
});
export function $setup($scope) {
  $value($scope, "a");
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
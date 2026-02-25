export const $template = "<textarea></textarea><textarea></textarea><textarea></textarea><textarea></textarea><textarea></textarea><textarea></textarea><button>Update</button>";
export const $walks = /* get, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1) */" b b b b b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/7", $scope => {
  _._attr_textarea_value_default($scope, "#textarea/2", $scope.value);
  _._attr_textarea_value_default($scope, "#textarea/3", $scope.value);
  _._attr_textarea_value($scope, "#textarea/4", $scope.value, undefined);
  _._attr_textarea_value($scope, "#textarea/5", $scope.value, undefined);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_textarea_value_script($scope, "#textarea/4");
  _._attr_textarea_value_script($scope, "#textarea/5");
  _._on($scope["#button/6"], "click", function () {
    $value($scope, "b");
  });
});
export function $setup($scope) {
  _._attr_textarea_value_default($scope, "#textarea/0", "a");
  _._attr_textarea_value_default($scope, "#textarea/1", "a");
  $value($scope, "a");
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
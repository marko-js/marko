export const $template = "<textarea></textarea><button>update</button>";
export const $walks = /* get, over(1), get, over(1) */" b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/2", $scope => _._attr_textarea_value($scope, "#textarea/0", $scope.value));
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/1"], "click", function () {
  $value($scope, "after");
}));
export function $setup($scope) {
  $value($scope, "before");
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
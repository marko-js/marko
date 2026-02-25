export const $template = "<dialog></dialog><dialog></dialog><dialog></dialog><button>Update</button>";
export const $walks = /* over(1), get, over(1), get, over(1), get, over(1) */"b b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $open = /* @__PURE__ */_._let("open/3", $scope => {
  _._attr_dialog_open_default($scope, "#dialog/0", $scope.open);
  _._attr_dialog_open($scope, "#dialog/1", $scope.open, undefined);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_dialog_open_script($scope, "#dialog/1");
  _._on($scope["#button/2"], "click", function () {
    $open($scope, true);
  });
});
export function $setup($scope) {
  $open($scope, false);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
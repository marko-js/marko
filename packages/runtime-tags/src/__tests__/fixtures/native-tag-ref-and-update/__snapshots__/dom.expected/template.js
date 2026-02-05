export const $template = "<button>Initial</button>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $btn_getter = _._el("__tests__/template.marko_0_#button", "#button/0");
const $count = /* @__PURE__ */_._let("count/1", $scope => _._attr($scope["#button/0"], "data-count", $scope.count));
const $setup__script = _._script("__tests__/template.marko_0", $scope => (((0, $btn_getter($scope)))().textContent = "after"));
export function $setup($scope) {
  $count($scope, 0);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
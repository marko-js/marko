export const $template = "<table><tbody></tbody></table><button>Toggle</button>";
export const $walks = /* next(1), get, out(1), get, over(1) */"D l b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if = /* @__PURE__ */_._if("#tbody/0", "<tr><td>Hi</td></tr>", /* over(1) */"b");
const $show__script = _._script("__tests__/template.marko_0_show", $scope => _._on($scope["#button/1"], "click", function () {
  $show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */_._let("show/2", $scope => {
  $if($scope, $scope.show ? 0 : 1);
  $show__script($scope);
});
export function $setup($scope) {
  $show($scope, false);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
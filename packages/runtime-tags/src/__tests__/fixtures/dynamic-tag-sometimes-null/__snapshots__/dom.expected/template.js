export const $template = "<!><!><button></button>";
export const $walks = /* over(1), replace, over(1), get, over(1) */"b%b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x_content = _._content_resume("__tests__/template.marko_1_content", "Body Content", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $x_content);
const $x__script = _._script("__tests__/template.marko_0_x", $scope => _._on($scope["#button/1"], "click", function () {
  $x($scope, $scope.x ? null : "div");
}));
const $x = /* @__PURE__ */_._let("x/2", $scope => {
  $dynamicTag($scope, $scope.x);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, null);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
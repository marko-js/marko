export const $template = "<button></button><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content = /* @__PURE__ */_._content_branch("hi", /* over(1) */"b");
const $if = /* @__PURE__ */_._if("#text/1", $if_content);
const $show__script = _._script("__tests__/template.marko_0_show", $scope => _._on($scope["#button/0"], "click", function () {
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
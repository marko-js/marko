export const $template = "<button class=inc></button><button class=toggle></button><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__count = /* @__PURE__ */_._if_closure("count", "#text/2", 0, ($scope, count) => _._text($scope["#text/0"], count));
const $if_content__setup = $if_content__count;
const $if_content = /* @__PURE__ */_._content_branch("The count is <!>", /* over(1), replace, over(1) */"b%b", $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/2", $if_content);
const $show__script = _._script("__tests__/template.marko_0_show", ($scope, {
  show
}) => _._on($scope["#button/1"], "click", function () {
  $show($scope, show = !show);
}));
const $show = /* @__PURE__ */_._let("show/3", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show__script($scope);
});
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/4", $scope => {
  $if_content__count($scope);
  $count__script($scope);
});
export function $setup($scope) {
  $show($scope, true);
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
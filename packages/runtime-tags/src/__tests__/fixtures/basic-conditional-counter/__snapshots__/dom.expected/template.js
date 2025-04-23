export const $template = "<button class=inc></button><button class=toggle></button><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count$if$content = /* @__PURE__ */_$.conditionalClosure("count", "#text/2", 0, ($scope, count) => _$.data($scope["#text/0"], count));
const $if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", 0, 0, $scope => $count$if$content._($scope));
const $if = /* @__PURE__ */_$.conditional("#text/2", $if_content);
const $show_effect = _$.effect("__tests__/template.marko_0_show", ($scope, {
  show
}) => _$.on($scope["#button/1"], "click", function () {
  $show($scope, !show);
}));
const $show = /* @__PURE__ */_$.state("show/3", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show_effect($scope);
});
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope, count + 1), count;
}));
const $count = /* @__PURE__ */_$.state("count/4", $scope => {
  $count$if$content($scope);
  $count_effect($scope);
});
export function $setup($scope) {
  $show($scope, true);
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
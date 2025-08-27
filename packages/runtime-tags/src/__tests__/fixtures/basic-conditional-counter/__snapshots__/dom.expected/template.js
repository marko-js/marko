export const $template = "<button class=inc></button><button class=toggle></button><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count$if$content = /* @__PURE__ */_$.conditionalClosure("count", "#text/2", 0, ($scope, count) => _$.data($scope["#text/0"], count));
const $setup$if$content = $count$if$content;
const $if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get, out(1) */"D l", $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/2", $if_content);
const $show_effect = _$.effect("__tests__/template.marko_0_show", ($scope, {
  show
}) => _$.on($scope["#button/1"], "click", function () {
  $show($scope, show = !show);
}));
const $show = /* @__PURE__ */_$.state("show/3", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show_effect($scope);
});
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope, ++count)
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
export const $template = "<div><!><!><button>Toggle</button></div>";
export const $walks = /* next(1), replace, over(1), replace, over(1), get, out(1) */"D%b%b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup$if$content2 = $scope => {
  _$.data($scope["#text/0"], $scope.$global.x);
};
const $if_content2 = /* @__PURE__ */_$.createRenderer("<span class=hidden> </span>", /* next(1), get */"D ", $setup$if$content2);
const $setup$if$content = $scope => {
  _$.data($scope["#text/0"], $scope.$global.x);
};
const $if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", $setup$if$content);
const $if2 = /* @__PURE__ */_$.conditional("#text/1", $if_content2);
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
const $show_effect = _$.effect("__tests__/template.marko_0_show", ($scope, {
  show
}) => _$.on($scope["#button/2"], "click", function () {
  $show($scope, !show);
}));
const $show = /* @__PURE__ */_$.state("show/3", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $if2($scope, !show ? 0 : 1);
  $show_effect($scope);
});
export function $setup($scope) {
  $show($scope, false);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
export const $template = "<button></button><!><!>";
export const $walks = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $if_content = /* @__PURE__ */_$.createRenderer("hi");
const $if = /* @__PURE__ */_$.conditional("#text/1", $if_content);
const $show_effect = _$.effect("__tests__/template.marko_0_show", ($scope, {
  show
}) => _$.on($scope["#button/0"], "click", function () {
  $show($scope, !show);
}));
const $show = /* @__PURE__ */_$.state("show/2", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show_effect($scope);
});
export function $setup($scope) {
  $show($scope, false);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
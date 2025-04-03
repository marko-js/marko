export const $template = "<div><!><button>Toggle</button></div>";
export const $walks = /* next(1), replace, over(1), get, out(1) */"D%b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $if_content = /* @__PURE__ */_$.createRenderer("Hello!");
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
const $show_effect = _$.effect("__tests__/template.marko_0_show", ($scope, {
  show
}) => _$.on($scope["#button/1"], "click", function () {
  $show($scope, !show);
}));
const $show = /* @__PURE__ */_$.state("show/2", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show_effect($scope);
});
export function $setup($scope) {
  $show($scope, true);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
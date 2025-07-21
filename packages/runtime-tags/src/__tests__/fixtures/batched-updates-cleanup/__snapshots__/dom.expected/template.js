export const $template = "<button></button><!><!>";
export const $walks = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $message$if$content = /* @__PURE__ */_$.conditionalClosure("message", "#text/1", 0, ($scope, message) => _$.data($scope["#text/0"], message));
const $setup$if$content = $message$if$content;
const $if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/1", $if_content);
const $show_effect = _$.effect("__tests__/template.marko_0_show", ($scope, {
  show
}) => _$.on($scope["#button/0"], "click", function () {
  $message($scope, "bye");
  $show($scope, show = !show);
}));
const $show = /* @__PURE__ */_$.state("show/2", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show_effect($scope);
});
const $message = /* @__PURE__ */_$.state("message/3", $message$if$content);
export function $setup($scope) {
  $show($scope, true);
  $message($scope, "hi");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
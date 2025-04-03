export const $template = "<div><!><span></span><span></span></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $value$if$content = /* @__PURE__ */_$.conditionalClosure("value", "#text/0", 0, ($scope, value) => _$.data($scope["#text/0"], value));
const $if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", 0, 0, $scope => $value$if$content._($scope));
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
export const $value = /* @__PURE__ */_$.value("value", ($scope, value) => {
  $if($scope, value ? 0 : 1);
  $value$if$content($scope);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);
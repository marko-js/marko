export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $input_value$if$content = /* @__PURE__ */_$.conditionalClosure("input_value", "#div/0", 0, ($scope, input_value) => _$.data($scope["#text/0"], input_value));
const $if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", 0, 0, $input_value$if$content);
const $if = /* @__PURE__ */_$.conditional("#div/0", $if_content);
export const $input_value = /* @__PURE__ */_$.value("input_value", ($scope, input_value) => {
  $if($scope, input_value ? 0 : 1);
  $input_value$if$content($scope);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);
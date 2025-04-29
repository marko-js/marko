export const $template = "<div></div><input>";
export const $walks = /* get, over(1), get, over(1) */" b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $value$if$content = /* @__PURE__ */_$.conditionalClosure("value", "#div/0", 0, ($scope, value) => _$.data($scope["#text/0"], value));
const $setup$if$content = $value$if$content;
const $if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#div/0", $if_content);
const $value = /* @__PURE__ */_$.state("value/5", ($scope, value) => {
  _$.controllable_input_value($scope, "#input/1", value, $valueChange($scope));
  $if($scope, value ? 0 : 1);
  $value$if$content($scope);
});
export const $input_value = /* @__PURE__ */_$.value("input_value", $value);
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.controllable_input_value_effect($scope, "#input/1"));
export const $setup = $setup_effect;
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_value($scope, input.value));
function $valueChange($scope) {
  return _new_value => {
    $value($scope, _new_value);
  };
}
_$.register("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);
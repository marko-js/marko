export const $template = "<div></div><input>";
export const $walks = /* get, over(1), get, over(1) */" b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__value = /* @__PURE__ */_._if_closure("#div/0", 0, $scope => _._text($scope["#text/0"], $scope._.value));
const $if_content__setup = $if_content__value;
const $if = /* @__PURE__ */_._if("#div/0", "<span> </span>", /* next(1), get, out(1) */"D l", $if_content__setup);
const $value = /* @__PURE__ */_._let("value/5", $scope => {
  _._attr_input_value($scope, "#input/1", $scope.value, $valueChange($scope));
  $if($scope, $scope.value ? 0 : 1);
  $if_content__value($scope);
});
export const $input_value = ($scope, input_value) => $value($scope, input_value);
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._attr_input_value_script($scope, "#input/1"));
export const $setup = $setup__script;
export const $input = ($scope, input) => $input_value($scope, input.value);
function $valueChange($scope) {
  return (_new_value => {
    $value($scope, _new_value);
  });
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);
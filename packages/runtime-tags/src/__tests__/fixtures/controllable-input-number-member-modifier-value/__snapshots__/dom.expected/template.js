export const $template = `${_customInput_template}<span><!> <!></span>`;
export const $walks = /* <custom-input>, next(1), replace, over(2), replace, out(1) */`/${_customInput_walks}&D%c%l`;
import { $setup as _customInput, $input_value as _customInput_input_value, $input_valueChange as _customInput_input_valueChange, $template as _customInput_template, $walks as _customInput_walks } from "./tags/custom-input.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/3", $scope => {
  _customInput_input_value($scope["#childScope/0"], $scope.value);
  _._text($scope["#text/1"], $scope.value);
  _._text($scope["#text/2"], typeof $scope.value);
});
export function $setup($scope) {
  _customInput($scope["#childScope/0"]);
  _customInput_input_valueChange($scope["#childScope/0"], $valueChange($scope));
  $value($scope, 0);
}
function $valueChange($scope) {
  return _new_value => {
    $value($scope, _new_value);
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
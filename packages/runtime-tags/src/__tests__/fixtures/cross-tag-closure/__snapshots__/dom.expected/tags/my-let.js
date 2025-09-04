export const $template = "";
export const $walks = "";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/3", _._return);
export const $input_value = /* @__PURE__ */_._const("input_value", $value);
export function $setup($scope) {
  _._return_change($scope, $valueChange($scope));
}
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_value($scope, input.value));
function $valueChange($scope) {
  return _new_value => {
    $value($scope, _new_value);
  };
}
_._resume("__tests__/tags/my-let.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/tags/my-let.marko", $template, $walks, $setup, $input);
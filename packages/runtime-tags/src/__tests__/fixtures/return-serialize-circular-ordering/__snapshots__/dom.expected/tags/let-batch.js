export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_valueChange = /* @__PURE__ */_._const("input_valueChange", ($scope, input_valueChange) => _._return($scope, $_return($scope)));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_valueChange($scope, input.valueChange));
function $_return({
  input_valueChange
}) {
  return function () {
    input_valueChange(1);
  };
}
_._resume("__tests__/tags/let-batch.marko_0/_return", $_return);
export default /* @__PURE__ */_._template("__tests__/tags/let-batch.marko", $template, $walks, $setup, $input);
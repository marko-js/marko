export const $template = `${_myInput_template}<span> </span>`;
export const $walks = /* <my-input>, next(1), get, out(1) */`/${_myInput_walks}&D l`;
import { $setup as _myInput, $input as _myInput_input, $template as _myInput_template, $walks as _myInput_walks } from "./tags/my-input.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/2", $scope => {
  _myInput_input($scope["#childScope/0"], {
    type: "text",
    value: $scope.value,
    valueChange: $valueChange($scope)
  });
  _._text($scope["#text/1"], $scope.value);
});
export function $setup($scope) {
  _myInput($scope["#childScope/0"]);
  $value($scope, "hello");
}
function $valueChange($scope) {
  return _new_value => {
    $value($scope, _new_value);
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
export const $template = `${_myTextarea_template}<span> </span>`;
export const $walks = /* <my-textarea>, next(1), get, out(1) */`/${_myTextarea_walks}&D l`;
import { $setup as _myTextarea, $input as _myTextarea_input, $template as _myTextarea_template, $walks as _myTextarea_walks } from "./tags/my-textarea.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/2", $scope => {
  _myTextarea_input($scope["#childScope/0"], {
    value: $scope.value,
    valueChange: $valueChange($scope)
  });
  _._text($scope["#text/1"], $scope.value);
});
export function $setup($scope) {
  _myTextarea($scope["#childScope/0"]);
  $value($scope, "hello");
}
function $valueChange($scope) {
  return (_new_value => {
    $value($scope, _new_value);
  });
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
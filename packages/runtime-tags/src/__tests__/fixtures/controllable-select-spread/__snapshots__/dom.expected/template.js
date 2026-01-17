export const $template = `${_mySelect_template}<span> </span>`;
export const $walks = /* <my-select>, next(1), get, out(1) */`/${_mySelect_walks}&D l`;
import { $setup as _mySelect, $input as _mySelect_input, $template as _mySelect_template, $walks as _mySelect_walks } from "./tags/my-select.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $myselect_content = _._content_resume("__tests__/template.marko_1_content", "<option value=a>A</option><option value=b>B</option><option value=c>C</option>", /* over(3) */"d");
const $value = /* @__PURE__ */_._let("value/2", $scope => {
  _mySelect_input($scope["#childScope/0"], {
    value: $scope.value,
    valueChange: $valueChange($scope),
    content: $myselect_content($scope)
  });
  _._text($scope["#text/1"], $scope.value);
});
export function $setup($scope) {
  _mySelect($scope["#childScope/0"]);
  $value($scope, "b");
}
function $valueChange($scope) {
  return function (v) {
    $value($scope, v);
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
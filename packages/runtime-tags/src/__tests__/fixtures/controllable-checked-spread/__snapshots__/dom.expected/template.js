export const $template = /*@__PURE__*/(_w0 => `${_w0}<span> </span>`)(_checkbox_template);
export const $walks =
/*@__PURE__*/
/* <checkbox>, next(1), get, out(1) */
(_w0 => `/${_w0}&D l`)(_checkbox_walks);
import { $setup as _checkbox, $input as _checkbox_input, $template as _checkbox_template, $walks as _checkbox_walks } from "./tags/checkbox.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $checked = /* @__PURE__ */_._let("checked/2", $scope => {
  _checkbox_input($scope["#childScope/0"], {
    checked: $scope.checked,
    checkedChange: $checkedChange($scope)
  });
  _._text($scope["#text/1"], String($scope.checked));
});
export function $setup($scope) {
  _checkbox($scope["#childScope/0"]);
  $checked($scope, false);
}
function $checkedChange($scope) {
  return _new_checked => {
    $checked($scope, _new_checked);
  };
}
_._resume("__tests__/template.marko_0/checkedChange", $checkedChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
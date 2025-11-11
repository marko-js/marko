export const $template = `${_checkbox_template}<span> </span>`;
export const $walks = /* <checkbox>, next(1), get, out(1) */`/${_checkbox_walks}&D l`;
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
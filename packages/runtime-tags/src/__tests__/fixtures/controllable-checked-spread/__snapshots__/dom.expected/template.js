export const $template = `${_checkbox_template}<span> </span>`;
export const $walks = /* beginChild, _checkbox_walks, endChild, next(1), get, out(1) */`/${_checkbox_walks}&D l`;
import { $setup as _checkbox, $input as _checkbox_input, $template as _checkbox_template, $walks as _checkbox_walks } from "./tags/checkbox.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $checked = /* @__PURE__ */_$.state("checked/2", ($scope, checked) => {
  _$.data($scope["#text/1"], String(checked));
  _checkbox_input($scope["#childScope/0"], {
    checked: checked,
    checkedChange: $checkedChange($scope)
  });
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
_$.register("__tests__/template.marko_0/checkedChange", $checkedChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
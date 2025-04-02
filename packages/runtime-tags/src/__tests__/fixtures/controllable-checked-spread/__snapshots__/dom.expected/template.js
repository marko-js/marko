export const _template = `${_checkbox_template}<span> </span>`;
export const _walks = /* beginChild, _checkbox_walks, endChild, next(1), get, out(1) */`/${_checkbox_walks}&D l`;
import { _setup as _checkbox, _input as _checkbox_input, _template as _checkbox_template, _walks as _checkbox_walks } from "./tags/checkbox.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _checked = /* @__PURE__ */_$.state("checked/2", (_scope, checked) => {
  _$.data(_scope["#text/1"], String(checked));
  _checkbox_input(_scope["#childScope/0"], {
    checked: checked,
    checkedChange: _checkedChange(_scope)
  });
});
export function _setup(_scope) {
  _checkbox(_scope["#childScope/0"]);
  _checked(_scope, false);
}
function _checkedChange(_scope) {
  return _new_checked => {
    _checked(_scope, _new_checked);
  };
}
_$.register("__tests__/template.marko_0/checkedChange", _checkedChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
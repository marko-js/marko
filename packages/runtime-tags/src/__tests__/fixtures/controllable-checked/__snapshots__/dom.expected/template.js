export const _template = "<input type=checkbox><span> </span>";
export const _walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _checked = /* @__PURE__ */_$.state("checked/2", (_scope, checked) => {
  _$.controllable_input_checked(_scope, "#input/0", checked, _checkedChange(_scope));
  _$.data(_scope["#text/1"], String(checked));
});
const _setup_effect = _$.effect("__tests__/template.marko_0", _scope => _$.controllable_input_checked_effect(_scope, "#input/0"));
export function _setup(_scope) {
  _checked(_scope, false);
  _setup_effect(_scope);
}
function _checkedChange(_scope) {
  return _new_checked => {
    _checked(_scope, _new_checked);
  };
}
_$.register("__tests__/template.marko_0/checkedChange", _checkedChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
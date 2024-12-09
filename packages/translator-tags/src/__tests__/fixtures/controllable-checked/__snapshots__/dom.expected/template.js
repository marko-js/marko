export const _template_ = "<input type=checkbox><span> </span>";
export const _walks_ = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _checked = /* @__PURE__ */_$.state("checked", (_scope, checked) => {
  _$.controllable_input_checked(_scope, "#input/0", checked, _checkedChange(_scope));
  _$.data(_scope["#text/1"], String(checked));
});
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko_0", _scope => _$.controllable_input_checked_effect(_scope, "#input/0"));
export function _setup_(_scope) {
  _setup__effect(_scope);
  _checked(_scope, false);
}
function _checkedChange(_scope) {
  return _new_checked => {
    _checked(_scope, _new_checked);
  };
}
_$.register("packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko_0/checkedChange", _checkedChange);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/controllable-checked/template.marko", _template_, _walks_, _setup_);
export const _template_ = "<textarea></textarea><span> </span>";
export const _walks_ = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value = /* @__PURE__ */_$.state("value", (_scope, value) => {
  _$.controllable_textarea_value(_scope, "#textarea/0", value, _valueChange(_scope));
  _$.data(_scope["#text/1"], value);
});
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/controllable-textarea-value/template.marko_0", _scope => _$.controllable_textarea_value_effect(_scope, "#textarea/0"));
export function _setup_(_scope) {
  _setup__effect(_scope);
  _value(_scope, "hello");
}
function _valueChange(_scope) {
  return _new_value => {
    _value(_scope, _new_value);
  };
}
_$.register("packages/translator-tags/src/__tests__/fixtures/controllable-textarea-value/template.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/controllable-textarea-value/template.marko", _template_, _walks_, _setup_);
export const _template_ = "<select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select><span> </span>";
export const _walks_ = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _valueChange = _$.register("packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0/valueChange", _scope => function (v) {
  _value(_scope, v);
});
const _value = /* @__PURE__ */_$.state("value", (_scope, value) => {
  _$.controllable_select_value(_scope, "#select/0", value, _valueChange(_scope));
  _$.data(_scope["#text/1"], value);
});
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0", _scope => _$.controllable_select_value_effect(_scope, "#select/0"));
export function _setup_(_scope) {
  _setup__effect(_scope);
  _value(_scope, "b");
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko");
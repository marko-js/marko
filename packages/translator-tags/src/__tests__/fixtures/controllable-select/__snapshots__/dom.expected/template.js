export const _template_ = "<select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select><span> </span>";
export const _walks_ = /* get, over(1), next(1), get, out(1) */" bD l";
import { register as _register, controllable_select_value as _controllable_select_value, controllable_select_value_effect as _controllable_select_value_effect, data as _data, state as _state, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _valueChange = _register("packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0/valueChange", _scope => function (v) {
  _value(_scope, v);
});
const _value = /* @__PURE__ */_state("value", (_scope, value) => {
  _controllable_select_value(_scope, "#select/0", value, _valueChange(_scope));
  _data(_scope["#text/1"], value);
});
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0", _scope => _controllable_select_value_effect(_scope, "#select/0"));
export function _setup_(_scope) {
  _queueEffect(_scope, _setup__effect);
  _value(_scope, "b");
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko");
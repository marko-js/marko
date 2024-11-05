export const _template_ = "<textarea></textarea><span> </span>";
export const _walks_ = /* get, over(1), next(1), get, out(1) */" bD l";
import { register as _register, controllable_textarea_value as _controllable_textarea_value, controllable_textarea_value_effect as _controllable_textarea_value_effect, data as _data, queueSource as _queueSource, value as _value2, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _valueChange = _register("packages/translator-tags/src/__tests__/fixtures/controllable-textarea-value/template.marko_0/valueChange", _scope => function (_new_value) {
  _queueSource(_scope, _value, _new_value);
});
const _value = /* @__PURE__ */_value2("value", (_scope, value) => {
  _controllable_textarea_value(_scope, "#textarea/0", value, _valueChange(_scope));
  _data(_scope["#text/1"], value);
});
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/controllable-textarea-value/template.marko_0", _scope => _controllable_textarea_value_effect(_scope, "#textarea/0"));
export function _setup_(_scope) {
  _queueEffect(_scope, _setup__effect);
  _value(_scope, "hello");
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-textarea-value/template.marko");
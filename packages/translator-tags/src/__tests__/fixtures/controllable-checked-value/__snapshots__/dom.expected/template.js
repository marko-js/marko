export const _template_ = "<input type=radio><input type=radio><input type=radio><span> </span>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1), next(1), get, out(1) */" b b bD l";
import { register as _register, controllable_input_checkedValue as _controllable_input_checkedValue, controllable_input_checkedValue_effect as _controllable_input_checkedValue_effect, data as _data, queueSource as _queueSource, value as _value, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _checkedValueChange = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange", _scope => function (_new_checkedValue) {
  _queueSource(_scope, _checkedValue, _new_checkedValue);
});
const _checkedValueChange2 = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0", _scope => function (_new_checkedValue2) {
  _queueSource(_scope, _checkedValue, _new_checkedValue2);
});
const _checkedValueChange3 = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0", _scope => function (_new_checkedValue3) {
  _queueSource(_scope, _checkedValue, _new_checkedValue3);
});
const _checkedValue = /* @__PURE__ */_value("checkedValue", (_scope, checkedValue) => {
  _controllable_input_checkedValue(_scope, "#input/0", checkedValue, _checkedValueChange(_scope), "a");
  _controllable_input_checkedValue(_scope, "#input/1", checkedValue, _checkedValueChange2(_scope), "b");
  _controllable_input_checkedValue(_scope, "#input/2", checkedValue, _checkedValueChange3(_scope), "c");
  _data(_scope["#text/3"], checkedValue);
});
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0", _scope => {
  _controllable_input_checkedValue_effect(_scope, "#input/0");
  _controllable_input_checkedValue_effect(_scope, "#input/1");
  _controllable_input_checkedValue_effect(_scope, "#input/2");
});
export function _setup_(_scope) {
  _queueEffect(_scope, _setup__effect);
  _checkedValue(_scope, "a");
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko");
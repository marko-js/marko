export const _template_ = "<input type=checkbox value=a><input type=checkbox value=b><input type=checkbox value=c><span> </span>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1), next(1), get, out(1) */" b b bD l";
import { register as _register, controllable_input_checkedValues as _checkedValuesAttr, controllable_input_checkedValues_setup as _checkedValuesChangeEffect, data as _data, queueSource as _queueSource, value as _value, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _checkedValuesChange = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange", _scope => function (_new_checkedValues) {
  _queueSource(_scope, _checkedValues, _new_checkedValues);
});
const _checkedValuesChange2 = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0", _scope => function (_new_checkedValues2) {
  _queueSource(_scope, _checkedValues, _new_checkedValues2);
});
const _checkedValuesChange3 = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0", _scope => function (_new_checkedValues3) {
  _queueSource(_scope, _checkedValues, _new_checkedValues3);
});
const _checkedValues = /* @__PURE__ */_value("checkedValues", (_scope, checkedValues) => {
  _checkedValuesAttr(_scope, "#input/0", checkedValues, _checkedValuesChange(_scope), "a");
  _checkedValuesAttr(_scope, "#input/1", checkedValues, _checkedValuesChange2(_scope), "b");
  _checkedValuesAttr(_scope, "#input/2", checkedValues, _checkedValuesChange3(_scope), "c");
  _data(_scope["#text/3"], checkedValues);
});
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0", _scope => {
  _checkedValuesChangeEffect(_scope, "#input/0");
  _checkedValuesChangeEffect(_scope, "#input/1");
  _checkedValuesChangeEffect(_scope, "#input/2");
});
export function _setup_(_scope) {
  _queueEffect(_scope, _setup__effect);
  _checkedValues(_scope, ["a", "b"]);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko");
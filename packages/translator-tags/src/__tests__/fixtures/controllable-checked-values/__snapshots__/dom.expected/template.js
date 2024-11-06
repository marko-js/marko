export const _template_ = "<input type=checkbox><input type=checkbox><input type=checkbox><span> </span>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1), next(1), get, out(1) */" b b bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _checkedValueChange = _$.register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValueChange", _scope => function (_new_checkedValue) {
  _checkedValue(_scope, _new_checkedValue);
});
const _checkedValueChange2 = _$.register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValueChange_0", _scope => function (_new_checkedValue2) {
  _checkedValue(_scope, _new_checkedValue2);
});
const _checkedValueChange3 = _$.register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValueChange_0", _scope => function (_new_checkedValue3) {
  _checkedValue(_scope, _new_checkedValue3);
});
const _checkedValue = /* @__PURE__ */_$.state("checkedValue", (_scope, checkedValue) => {
  _$.controllable_input_checkedValue(_scope, "#input/0", checkedValue, _checkedValueChange(_scope), "a");
  _$.controllable_input_checkedValue(_scope, "#input/1", checkedValue, _checkedValueChange2(_scope), "b");
  _$.controllable_input_checkedValue(_scope, "#input/2", checkedValue, _checkedValueChange3(_scope), "c");
  _$.data(_scope["#text/3"], checkedValue);
});
const _setup__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0", _scope => {
  _$.controllable_input_checkedValue_effect(_scope, "#input/0");
  _$.controllable_input_checkedValue_effect(_scope, "#input/1");
  _$.controllable_input_checkedValue_effect(_scope, "#input/2");
});
export function _setup_(_scope) {
  _setup__effect(_scope);
  _checkedValue(_scope, ["a", "b"]);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko", _template_, _walks_, _setup_);
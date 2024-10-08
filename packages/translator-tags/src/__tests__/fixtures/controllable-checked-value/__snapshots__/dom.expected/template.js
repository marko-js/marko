export const _template_ = "<input type=radio value=a><input type=radio value=b><input type=radio value=c><span> </span>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1), next(1), get, out(1) */" b b bD l";
import { checkedValueAttr as _checkedValueAttr, checkedValueChangeEffect as _checkedValueChangeEffect, data as _data, queueSource as _queueSource, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _checkedValue = /* @__PURE__ */_value("checkedValue", (_scope, checkedValue) => {
  _checkedValueAttr(_scope["#input/0"], checkedValue, true, "a");
  _checkedValueAttr(_scope["#input/1"], checkedValue, true, "b");
  _checkedValueAttr(_scope["#input/2"], checkedValue, true, "c");
  _data(_scope["#text/3"], checkedValue);
});
const _setup__effect = _register("packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0", _scope => {
  _checkedValueChangeEffect(_scope["#input/0"], function (_new_checkedValue) {
    _queueSource(_scope, _checkedValue, _new_checkedValue);
  });
  _checkedValueChangeEffect(_scope["#input/1"], function (_new_checkedValue2) {
    _queueSource(_scope, _checkedValue, _new_checkedValue2);
  });
  _checkedValueChangeEffect(_scope["#input/2"], function (_new_checkedValue3) {
    _queueSource(_scope, _checkedValue, _new_checkedValue3);
  });
});
export function _setup_(_scope) {
  _queueEffect(_scope, _setup__effect);
  _checkedValue(_scope, "a");
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko");
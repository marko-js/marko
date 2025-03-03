export const _template_ = "";
export const _walks_ = "";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value = /* @__PURE__ */_$.state("value/3", (_scope, value) => _$.tagVarSignal(_scope, value));
export const _input_value_ = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => _value(_scope, input_value));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value_(_scope, input.value));
export function _setup_(_scope) {
  _$.setTagVarChange(_scope, _valueChange(_scope));
}
function _valueChange(_scope) {
  return _new_value => {
    _value(_scope, _new_value);
  };
}
_$.register("__tests__/tags/my-let.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-let.marko", _template_, _walks_, _setup_, _input_);
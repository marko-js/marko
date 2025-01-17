export const _template_ = "";
export const _walks_ = "";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value = /* @__PURE__ */_$.state("value", (_scope, value) => _$.tagVarSignal(_scope, value), () => _$.tagVarSignal);
export const _input_value_ = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => _value(_scope, input_value), () => _value);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value_(_scope, input.value), () => _input_value_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _$.setTagVarChange(_scope, _valueChange(_scope));
}
function _valueChange(_scope) {
  return _new_value => {
    _value(_scope, _new_value);
  };
}
_$.register("__tests__/tags/my-let.marko_0/valueChange", _valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-let.marko", _template_, _walks_, _setup_, () => _params__);
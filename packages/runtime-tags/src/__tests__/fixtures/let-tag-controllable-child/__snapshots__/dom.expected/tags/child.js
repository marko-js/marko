export const _template_ = "<button><!>|<!></button><button><!>|<!></button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1), get, next(1), replace, over(2), replace, out(1) */" D%c%l D%c%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_value_input_valueChange = /* @__PURE__ */_$.intersection(10, _scope => {
  const {
    input_value,
    input_valueChange
  } = _scope;
  _state(_scope, input_value, input_valueChange);
});
const _otherState_effect = _$.effect("__tests__/tags/child.marko_0_otherState", (_scope, {
  otherState
}) => _$.on(_scope["#button/3"], "click", function () {
  _otherState(_scope, otherState + 1), otherState;
}));
const _otherState = /* @__PURE__ */_$.state("otherState/12", (_scope, otherState) => {
  _$.data(_scope["#text/5"], otherState);
  _otherState_effect(_scope);
});
const _state_effect = _$.effect("__tests__/tags/child.marko_0_state", (_scope, {
  state
}) => _$.on(_scope["#button/0"], "click", function () {
  _state(_scope, state + 1), state;
}));
const _state = /* @__PURE__ */_$.state("state/11", (_scope, state) => {
  _$.data(_scope["#text/2"], state);
  _state_effect(_scope);
});
const _input_valueChange = /* @__PURE__ */_$.value("input_valueChange", (_scope, input_valueChange) => _expr_input_value_input_valueChange(_scope));
const _input_value = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => {
  _$.data(_scope["#text/1"], input_value);
  _$.data(_scope["#text/4"], input_value);
  _expr_input_value_input_valueChange(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_value(_scope, input.value);
  _input_valueChange(_scope, input.valueChange);
  _otherState(_scope, input.value, input["value" + "Change"]);
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, () => _params__);
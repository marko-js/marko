export const _template_ = "<button><!>|<!></button><button><!>|<!></button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1), get, next(1), replace, over(2), replace, out(1) */" D%c%l D%c%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    _otherState_change,
    otherState
  } = _scope;
  return function () {
    _otherState(_scope, otherState + 1, _otherState_change);
  };
};
const _expr__otherState_change_otherState_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko_0__otherState_change_otherState", _scope => _$.on(_scope["#button/3"], "click", _onClick(_scope)));
const _expr__otherState_change_otherState = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _otherState_change,
    otherState
  } = _scope;
  _expr__otherState_change_otherState_effect(_scope);
});
const _onClick2 = _scope => {
  const {
    _state_change,
    state
  } = _scope;
  return function () {
    _state(_scope, state + 1, _state_change);
  };
};
const _expr__state_change_state_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko_0__state_change_state", _scope => _$.on(_scope["#button/0"], "click", _onClick2(_scope)));
const _expr__state_change_state = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _state_change,
    state
  } = _scope;
  _expr__state_change_state_effect(_scope);
});
const _otherState = /* @__PURE__ */_$.state("otherState", (_scope, otherState) => _$.data(_scope["#text/5"], otherState), () => _expr__otherState_change_otherState);
const _otherState_change = /* @__PURE__ */_$.value("_otherState_change", 0, () => _expr__otherState_change_otherState);
const _state = /* @__PURE__ */_$.state("state", (_scope, state) => _$.data(_scope["#text/2"], state), () => _expr__state_change_state);
const _state_change = /* @__PURE__ */_$.value("_state_change", 0, () => _expr__state_change_state);
const _input_valueChange = /* @__PURE__ */_$.value("input_valueChange", (_scope, input_valueChange) => _state_change(_scope, input_valueChange), () => _state_change);
const _input_value = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => {
  _$.data(_scope["#text/1"], input_value);
  _$.data(_scope["#text/4"], input_value);
  _state(_scope, input_value, _scope["_state_change"]);
  _otherState(_scope, input_value, _scope["_otherState_change"]);
}, () => _$.intersections([_state, _otherState]));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_value(_scope, input.value);
  _input_valueChange(_scope, input.valueChange);
  _otherState_change(_scope, input["value" + "Change"]);
}, () => _$.intersections([_input_value, _input_valueChange, _otherState_change]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko", _template_, _walks_, _setup_, void 0, () => _params__);
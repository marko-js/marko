export const _template_ = "<button><!>|<!></button><button><!>|<!></button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1), get, next(1), replace, over(2), replace, out(1) */" D%c%l D%c%l";
export const _setup_ = () => {};
import { on as _on, data as _data, queueControllableSource as _queueControllableSource, register as _register, queueEffect as _queueEffect, intersection as _intersection, value as _value, changeHandler as _changeHandler, initValue as _initValue, intersections as _intersections, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    _otherState_change,
    otherState
  } = _scope;
  return function () {
    _queueControllableSource(_scope, _otherState, _otherState_change, otherState + 1);
  };
};
const _expr__otherState_change_otherState_effect = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko_0__otherState_change_otherState", _scope => _on(_scope["#button/3"], "click", _onClick(_scope)));
const _expr__otherState_change_otherState = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _otherState_change,
    otherState
  } = _scope;
  _queueEffect(_scope, _expr__otherState_change_otherState_effect);
});
const _onClick2 = _scope => {
  const {
    _state_change,
    state
  } = _scope;
  return function () {
    _queueControllableSource(_scope, _state, _state_change, state + 1);
  };
};
const _expr__state_change_state_effect = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko_0__state_change_state", _scope => _on(_scope["#button/0"], "click", _onClick2(_scope)));
const _expr__state_change_state = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _state_change,
    state
  } = _scope;
  _queueEffect(_scope, _expr__state_change_state_effect);
});
const _otherState = /* @__PURE__ */_value("otherState", (_scope, otherState) => _data(_scope["#text/5"], otherState), () => _expr__otherState_change_otherState);
const _otherState_change = _changeHandler("_otherState_change", /* @__PURE__ */_value("_otherState_change", (_scope, _otherState_change) => {}, () => _expr__otherState_change_otherState));
const _state = /* @__PURE__ */_value("state", (_scope, state) => _data(_scope["#text/2"], state), () => _expr__state_change_state);
const _state_change = _changeHandler("_state_change", /* @__PURE__ */_value("_state_change", (_scope, _state_change) => {}, () => _expr__state_change_state));
const _state_init = _initValue("state", _state);
const _otherState_init = _initValue("otherState", _otherState);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _data(_scope["#text/1"], input.value);
  _data(_scope["#text/4"], input.value);
  _state_change(_scope, input.valueChange);
  (_scope["_state_change"] ? _state : _state_init)(_scope, input.value);
  _otherState_change(_scope, input["value" + "Change"]);
  (_scope["_otherState_change"] ? _otherState : _otherState_init)(_scope, input["value"]);
}, () => _intersections([_state_change, _state, _otherState_change, _otherState]));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/let-tag-controllable-child/components/child.marko");
export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input_value$if_content = /* @__PURE__ */_$.conditionalClosure("input_value", "#div/0", 0, (_scope, input_value) => _$.data(_scope["#text/0"], input_value));
const _setup$if_content = _scope => {
  _input_value$if_content._(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#div/0", _if_content);
export const _input_value_ = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => {
  _if(_scope, input_value ? 0 : 1);
  _input_value$if_content(_scope);
}, () => _if);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value_(_scope, input.value), () => _input_value_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);
export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input_value$if_content = /* @__PURE__ */_$.conditionalClosure("#text/0", () => _if_content, (_scope, input_value) => _$.data(_scope["#text/0"], input_value));
const _setup$if_content = _scope => {
  _input_value$if_content._(_scope, _scope._["input_value"]);
};
const _if_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", _setup$if_content));
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
export const _input_value_ = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => {
  _if(_scope, input_value ? _if_content : null);
  _input_value$if_content(_scope, input_value);
}, () => _if);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value_(_scope, input.value), () => _input_value_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);
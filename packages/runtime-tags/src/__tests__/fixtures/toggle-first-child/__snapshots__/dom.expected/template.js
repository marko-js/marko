export const _template_ = "<div><!><span></span><span></span></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value$if_content = /* @__PURE__ */_$.conditionalClosure("value/3", "#text/0", 0, (_scope, value) => _$.data(_scope["#text/0"], value));
const _setup$if_content = _scope => {
  _value$if_content._(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
export const _value_ = /* @__PURE__ */_$.value("value/3", (_scope, value) => {
  _if(_scope, value ? 0 : 1);
  _value$if_content(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input/2", (_scope, input) => _value_(_scope, input.value));
export const _params__ = /* @__PURE__ */_$.value("_params_/1", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);
export const _template_ = "<div><!><span></span><span></span></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value$if_content = /* @__PURE__ */_$.closure("value", (_scope, value) => _$.data(_scope["#text/0"], value));
const _if_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", void 0, () => [_value$if_content]));
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
export const _value_ = /* @__PURE__ */_$.value("value", (_scope, value) => _if(_scope, value ? _if_content : null), () => _$.intersections([_if, _$.inConditionalScope(_value$if_content, "#text/0")]));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _value_(_scope, input.value), () => _value_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);
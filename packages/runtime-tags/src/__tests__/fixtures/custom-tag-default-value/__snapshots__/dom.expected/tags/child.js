export const _template_ = "<!> ";
export const _walks_ = /* replace, over(2) */"%c";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value = /* @__PURE__ */_$.value("value/4", (_scope, value) => _$.data(_scope["#text/0"], value));
export const _input_value_ = /* @__PURE__ */_$.value("input_value/3", (_scope, input_value) => _value(_scope, input_value));
export const _input_ = /* @__PURE__ */_$.value("input/2", (_scope, input) => _input_value_(_scope, input.value));
export const _params__ = /* @__PURE__ */_$.value("_params_/1", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, () => _params__);
export const _template_ = "";
export const _walks_ = "";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input_value__effect = _$.effect("__tests__/tags/thing.marko_0_input_value", ({
  input_value
}) => input_value);
export const _input_value_ = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => _input_value__effect(_scope));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value_(_scope, input.value));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", _template_, _walks_, _setup_, () => _params__);
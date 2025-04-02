export const _template = "";
export const _walks = "";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input_value_effect = _$.effect("__tests__/tags/thing.marko_0_input_value", ({
  input_value
}) => input_value);
export const _input_value = /* @__PURE__ */_$.value("input_value", _input_value_effect);
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value(_scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", _template, _walks, _setup, _input);
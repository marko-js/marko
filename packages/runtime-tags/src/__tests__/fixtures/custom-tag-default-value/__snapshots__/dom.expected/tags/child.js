export const _template = "<!> ";
export const _walks = /* replace, over(2) */"%c";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
export const _input_value = /* @__PURE__ */_$.value("input_value", _value);
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value(_scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup, _input);
export const _template = "<!> <!>";
export const _walks = /* replace, over(2), replace, over(1) */"%c%b";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input_value_ = /* @__PURE__ */_$.value("input_value_0", (_scope, input_value_0) => _$.data(_scope["#text/1"], input_value_0));
export const _input_value = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => {
  _$.data(_scope["#text/0"], input_value);
  _input_value_(_scope, input_value?.[0]);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value(_scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);
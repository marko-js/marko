export const _template = "<em>Testing</em> <!>";
export const _walks = /* over(2), replace, over(1) */"c%b";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _value = /* @__PURE__ */_$.value("value", (_scope, value) => _$.html(_scope, value, "#text/0"));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _value(_scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);
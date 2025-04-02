export const _template = "Hello <!>!";
export const _walks = /* over(1), replace, over(2) */"b%c";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_name = /* @__PURE__ */_$.value("input_name", (_scope, input_name) => _$.data(_scope["#text/0"], input_name));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_name(_scope, input.name));
export default /* @__PURE__ */_$.createTemplate("__tests__/hello.marko", _template, _walks, _setup, _input);
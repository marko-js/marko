export const _template = "<div><span> </span></div>";
export const _walks = /* next(2), get, out(2) */"E m";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_x = /* @__PURE__ */_$.value("input_x", (_scope, input_x) => _$.data(_scope["#text/0"], input_x));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_x(_scope, input.x));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);
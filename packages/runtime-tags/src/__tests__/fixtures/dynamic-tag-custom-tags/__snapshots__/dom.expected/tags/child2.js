export const _template = "<div>Child 2 has <!></div>";
export const _walks = /* next(1), over(1), replace, out(1) */"Db%l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _value = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _value(_scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child2.marko", _template, _walks, _setup, _input);
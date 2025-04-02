export const _template = "<!> <!>";
export const _walks = /* replace, over(2), replace, over(1) */"%c%b";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _b = /* @__PURE__ */_$.value("b", (_scope, b) => _$.data(_scope["#text/1"], b));
export const _a = /* @__PURE__ */_$.value("a", (_scope, a) => _$.data(_scope["#text/0"], a));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _a(_scope, input.a);
  _b(_scope, input.b);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);
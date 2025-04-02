export const _template = "<button><!> <!></button>";
export const _walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _c = (_scope, c) => {
  _$.data(_scope["#text/1"], c);
};
export const _b = /* @__PURE__ */_$.value("b", (_scope, b) => {
  _$.data(_scope["#text/0"], b);
  _c(_scope, b);
});
export const _a2 = /* @__PURE__ */_$.value("_a", (_scope, _a) => _b(_scope, _a.b));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _a2(_scope, input.a));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);
export const _template = "<button>Increment</button><!> <!>";
export const _walks = /* get, over(1), replace, over(2), replace, over(1) */" b%c%b";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _b_effect = _$.effect("__tests__/template.marko_0_b", (_scope, {
  b
}) => _$.on(_scope["#button/0"], "click", () => (_b(_scope, b + 1), b)));
const _b = /* @__PURE__ */_$.state("b/6", (_scope, b) => {
  _$.data(_scope["#text/2"], b);
  _b_effect(_scope);
});
export const _a = /* @__PURE__ */_$.value("a", (_scope, a) => {
  _$.data(_scope["#text/1"], a);
  _b(_scope, a * 2);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _a(_scope, input.a));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);
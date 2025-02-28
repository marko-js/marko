export const _template_ = "<div><button class=a> </button> + <button class=b> </button> = <!></div>";
export const _walks_ = /* next(1), get, next(1), get, out(1), over(1), get, next(1), get, out(1), over(1), replace, out(1) */"D D lb D lb%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_a_b = /* @__PURE__ */_$.intersection(7, _scope => {
  const {
    "a/5": a,
    "b/6": b
  } = _scope;
  _$.data(_scope["#text/4"], a + b);
});
const _b = /* @__PURE__ */_$.state("b/6", (_scope, b) => {
  _$.data(_scope["#text/3"], b);
  _expr_a_b(_scope);
});
const _a = /* @__PURE__ */_$.state("a/5", (_scope, a) => {
  _$.data(_scope["#text/1"], a);
  _expr_a_b(_scope);
});
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => {
  _$.on(_scope["#button/0"], "click", function () {
    _a(_scope, 10);
  });
  _$.on(_scope["#button/2"], "click", function () {
    _b(_scope, 5);
  });
});
export function _setup_(_scope) {
  _a(_scope, 0);
  _b(_scope, 0);
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
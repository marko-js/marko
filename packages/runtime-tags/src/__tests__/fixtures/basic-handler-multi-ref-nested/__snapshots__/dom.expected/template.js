export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_a_b_effect = _$.effect("__tests__/template.marko_0_a_b", (_scope, {
  a,
  b
}) => _$.on(_scope["#button/0"], "click", function () {
  _a(_scope, a.map(a => b));
}));
const _expr_a_b = /* @__PURE__ */_$.intersection(4, _scope => {
  const {
    a,
    b
  } = _scope;
  _expr_a_b_effect(_scope);
});
const _b = /* @__PURE__ */_$.state("b/3", (_scope, b) => _expr_a_b(_scope));
const _a = /* @__PURE__ */_$.state("a/2", (_scope, a) => {
  _$.data(_scope["#text/1"], a.join(""));
  _expr_a_b(_scope);
});
export function _setup_(_scope) {
  _a(_scope, [0]);
  _b(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
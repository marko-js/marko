export const _template_ = "<button> </button><!> <!> <!>";
export const _walks_ = /* get, next(1), get, out(1), replace, over(2), replace, over(2), replace, over(1) */" D l%c%c%b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_y_z = /* @__PURE__ */_$.intersection(8, _scope => {
  const {
    "y/6": y,
    "z/7": z
  } = _scope;
  _a(_scope, y + z);
});
const _a = /* @__PURE__ */_$.value("a/9", (_scope, a) => _$.data(_scope["#text/4"], a));
const _z = /* @__PURE__ */_$.value("z/7", (_scope, z) => {
  _$.data(_scope["#text/3"], z);
  _expr_y_z(_scope);
});
const _y = /* @__PURE__ */_$.value("y/6", (_scope, y) => {
  _$.data(_scope["#text/2"], y);
  _expr_y_z(_scope);
});
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  "x/5": x
}) => _$.on(_scope["#button/0"], "click", () => (_x(_scope, x + 1), x)));
const _x = /* @__PURE__ */_$.state("x/5", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _y(_scope, x + 1);
  _z(_scope, x + 2);
  _x_effect(_scope);
});
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
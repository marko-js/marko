export const _template_ = "<button> </button><!>";
export const _walks_ = /* get, next(1), get, out(1), replace, over(1) */" D l%b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_x_y_effect = _$.effect("__tests__/template.marko_0_x_y", (_scope, {
  "x/3": x,
  "y/4": y
}) => _$.on(_scope["#button/0"], "click", () => _x(_scope, _y(_scope, x + y))));
const _expr_x_y = /* @__PURE__ */_$.intersection(5, _scope => {
  const {
    "x/3": x,
    "y/4": y
  } = _scope;
  _expr_x_y_effect(_scope);
});
const _y = /* @__PURE__ */_$.state("y/4", (_scope, y) => {
  _$.data(_scope["#text/2"], y);
  _expr_x_y(_scope);
});
const _x = /* @__PURE__ */_$.state("x/3", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _expr_x_y(_scope);
});
export function _setup_(_scope) {
  _x(_scope, 1);
  _y(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
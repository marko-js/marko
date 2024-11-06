export const _template_ = "<button> </button><!> <!> <!>";
export const _walks_ = /* get, next(1), get, out(1), replace, over(2), replace, over(2), replace, over(1) */" D l%c%c%b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_y_z = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    y,
    z
  } = _scope;
  _a(_scope, y + z);
});
const _a = /* @__PURE__ */_$.value("a", (_scope, a) => _$.data(_scope["#text/4"], a));
const _z = /* @__PURE__ */_$.value("z", (_scope, z) => _$.data(_scope["#text/3"], z), () => _expr_y_z);
const _y = /* @__PURE__ */_$.value("y", (_scope, y) => _$.data(_scope["#text/2"], y), () => _expr_y_z);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return () => (_x(_scope, x + 1), x);
};
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/let-tag-with-intersection/template.marko_0_x", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _x_effect(_scope);
  _y(_scope, x + 1);
  _z(_scope, x + 2);
}, () => _$.intersections([_y, _z]));
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/let-tag-with-intersection/template.marko", _template_, _walks_, _setup_);
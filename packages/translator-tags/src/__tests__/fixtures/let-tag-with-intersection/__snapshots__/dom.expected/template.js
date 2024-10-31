export const _template_ = "<button> </button><!> <!> <!>";
export const _walks_ = /* get, next(1), get, out(1), replace, over(2), replace, over(2), replace, over(1) */" D l%c%c%b";
import { on as _on, data as _data, queueSource as _queueSource, intersection as _intersection, value as _value, register as _register, queueEffect as _queueEffect, intersections as _intersections, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _expr_y_z = /* @__PURE__ */_intersection(2, _scope => {
  const {
    y,
    z
  } = _scope;
  _a(_scope, y + z);
});
const _a = /* @__PURE__ */_value("a", (_scope, a) => _data(_scope["#text/4"], a));
const _z = /* @__PURE__ */_value("z", (_scope, z) => _data(_scope["#text/3"], z), () => _expr_y_z);
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/2"], y), () => _expr_y_z);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return () => (_queueSource(_scope, _x, x + 1), x);
};
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/let-tag-with-intersection/template.marko_0_x", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/1"], x);
  _queueEffect(_scope, _x_effect);
  _y(_scope, x + 1);
  _z(_scope, x + 2);
}, () => _intersections([_y, _z]));
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/let-tag-with-intersection/template.marko");
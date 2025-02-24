export const _template_ = "<button class=inc><!>,<!></button><!><!>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1), replace, over(1) */" D%c%l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_content_x_y = /* @__PURE__ */_$.intersection(3, _scope => {
  const {
    input_content,
    x,
    y
  } = _scope;
  _dynamicTag(_scope, input_content, () => [x, y]);
}, () => _dynamicTag);
const _expr_x_y_effect = _$.effect("__tests__/tags/custom-tag.marko_0_x_y", (_scope, {
  x,
  y
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
  _y(_scope, y + 1), y;
}));
const _expr_x_y = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x,
    y
  } = _scope;
  _expr_x_y_effect(_scope);
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/3", 0, 0, 1);
const _y = /* @__PURE__ */_$.state("y", (_scope, y) => _$.data(_scope["#text/2"], y), () => _$.intersections([_expr_x_y, _expr_input_content_x_y]));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _$.data(_scope["#text/1"], x), () => _$.intersections([_expr_x_y, _expr_input_content_x_y]));
export const _input_content_ = /* @__PURE__ */_$.value("input_content", 0, () => _expr_input_content_x_y);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_content_(_scope, input.content), () => _input_content_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _x(_scope, 1);
  _y(_scope, 10);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", _template_, _walks_, _setup_, () => _params__);
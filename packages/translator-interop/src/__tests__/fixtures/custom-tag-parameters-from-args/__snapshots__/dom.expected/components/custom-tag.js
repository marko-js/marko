export const _template_ = "<button class=inc><!>,<!></button><!><!>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1), replace, over(1) */" D%c%l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _inputRenderBody_input = _$.dynamicTagAttrs("#text/3", void 0, 1);
const _expr_Text_x_y = /* @__PURE__ */_$.intersection(3, _scope => {
  const {
    x,
    y
  } = _scope;
  _inputRenderBody_input(_scope, () => [x, y]);
}, () => _inputRenderBody_input);
const _onClick = _scope => {
  const {
    x,
    y
  } = _scope;
  return function () {
    _x(_scope, x + 1);
    _y(_scope, y + 1);
  };
};
const _expr_x_y_effect = _$.effect("packages/translator-interop/src/__tests__/fixtures/custom-tag-parameters-from-args/components/custom-tag.marko_0_x_y", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _expr_x_y = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    x,
    y
  } = _scope;
  _expr_x_y_effect(_scope);
});
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/3", null, () => _expr_Text_x_y);
const _y = /* @__PURE__ */_$.state("y", (_scope, y) => _$.data(_scope["#text/2"], y), () => _$.intersections([_expr_x_y, _expr_Text_x_y]));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => _$.data(_scope["#text/1"], x), () => _$.intersections([_expr_x_y, _expr_Text_x_y]));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), () => _dynamicTagName);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export function _setup_(_scope) {
  _x(_scope, 1);
  _y(_scope, 10);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-interop/src/__tests__/fixtures/custom-tag-parameters-from-args/components/custom-tag.marko");
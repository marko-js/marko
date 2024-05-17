import { on as _on, queueSource as _queueSource, data as _data, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, register as _register, queueEffect as _queueEffect, conditional as _conditional, intersections as _intersections, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _inputRenderBody_input = _dynamicTagAttrs("#text/3", void 0, true);
const _expr_Text_x_y = /* @__PURE__ */_intersection(3, _scope => {
  const {
    x,
    y
  } = _scope;
  _inputRenderBody_input(_scope, () => [x, y]);
});
const _onClick = _scope => {
  const {
    x,
    y
  } = _scope;
  return function () {
    _queueSource(_scope, _x, x + 1);
    _queueSource(_scope, _y, y + 1);
  };
};
const _expr_x_y_effect = _register("packages/translator-interop/src/__tests__/fixtures/custom-tag-parameters-from-args/components/custom-tag.marko_0_x_y", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _expr_x_y = /* @__PURE__ */_intersection(2, _scope => {
  const {
    x,
    y
  } = _scope;
  _queueEffect(_scope, _expr_x_y_effect);
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/3", null, _expr_Text_x_y);
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/2"], y), _intersections([_expr_x_y, _expr_Text_x_y]));
const _x = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/1"], x), _intersections([_expr_x_y, _expr_Text_x_y]));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), void 0, _dynamicTagName);
const _setup = _scope => {
  _x(_scope, 1);
  _y(_scope, 10);
};
export const _template_ = "<button class=inc><!>,<!></button><!><!>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1), replace, over(1) */" D%c%l%bD";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input_(_scope, input, _clean);
}), "packages/translator-interop/src/__tests__/fixtures/custom-tag-parameters-from-args/components/custom-tag.marko");
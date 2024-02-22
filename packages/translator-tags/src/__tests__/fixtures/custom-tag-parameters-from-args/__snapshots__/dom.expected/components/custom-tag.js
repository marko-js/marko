import { on as _on, queueSource as _queueSource, data as _data, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, register as _register, queueEffect as _queueEffect, conditional as _conditional, intersections as _intersections, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _inputRenderBody_input = _dynamicTagAttrs("#text/3", void 0, true);
const _expr__dynamicTagName_x_y = /* @__PURE__ */_intersection(3, _scope => {
  const {
    "#text/3": _dynamicTagName,
    x,
    y
  } = _scope;
  _inputRenderBody_input(_scope, () => [x, y]);
});
const _expr_x_y_effect = _register("packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-args/components/custom-tag.marko_0_x_y", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    x,
    y
  } = _scope;
  _queueSource(_scope, _x, x + 1);
  _queueSource(_scope, _y, y + 1);
}));
const _expr_x_y = /* @__PURE__ */_intersection(2, _scope => {
  const {
    x,
    y
  } = _scope;
  _queueEffect(_scope, _expr_x_y_effect);
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/3", null, _expr__dynamicTagName_x_y);
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/2"], y), _intersections([_expr_x_y, _expr__dynamicTagName_x_y]));
const _x = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/1"], x), _intersections([_expr_x_y, _expr__dynamicTagName_x_y]));
const _input = /* @__PURE__ */_value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), void 0, _dynamicTagName);
const _setup = _scope => {
  _x(_scope, 1);
  _y(_scope, 10);
};
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export { _input };
export const template = "<button class=inc><!>,<!></button><!><!>";
export const walks = /* get, next(1), replace, over(2), replace, out(1), replace, over(1) */" D%c%l%bD";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-args/components/custom-tag.marko");
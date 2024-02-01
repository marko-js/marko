import { on as _on, queueSource as _queueSource, data as _data, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _inputRenderBody_input = _dynamicTagAttrs("#text/2");
const _expr_dynamicTagName_x = /* @__PURE__ */_intersection(2, _scope => {
  const {
    "#text/2": dynamicTagName,
    x
  } = _scope;
  _inputRenderBody_input(_scope, () => x);
});
const _dynamicTagName = /* @__PURE__ */_conditional("#text/2", null, _expr_dynamicTagName_x);
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/components/custom-tag.marko_0_x", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    x
  } = _scope;
  _queueSource(_scope, _x, x + 1);
}));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/1"], x);
  _queueEffect(_scope, _x_effect);
}, _expr_dynamicTagName_x);
const _input = /* @__PURE__ */_value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), void 0, _dynamicTagName);
const _setup = _scope => {
  _x(_scope, 1);
};
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export { _input };
export const template = "<button class=inc> </button><!>";
export const walks = /* get, next(1), get, out(1), replace, over(1) */" D l%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/custom-tag-parameters-from-single-arg/components/custom-tag.marko");
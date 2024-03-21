import { on as _on, data as _data, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _text = /* @__PURE__ */_value("text", (_scope, text) => _data(_scope["#text/1"], text));
const _onClick_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko_0_onClick", _scope => {
  const {
    onClick
  } = _scope;
  _on(_scope["#button/0"], "click", onClick);
});
const _onClick = /* @__PURE__ */_value("onClick", (_scope, onClick) => _queueEffect(_scope, _onClick_effect));
const _destructure2 = (_scope, {
  onClick,
  text
}) => {
  _onClick(_scope, onClick);
  _text(_scope, text);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input));
export const args = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const template = "<button> </button>";
export const walks = /* get, next(1), get, out(1) */" D l";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko");
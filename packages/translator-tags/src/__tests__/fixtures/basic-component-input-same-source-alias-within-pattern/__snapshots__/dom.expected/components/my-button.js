export const _template_ = "<button><!> <!></button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
export const _setup_ = () => {};
import { on as _on, data as _data, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _textAlias = (_scope, textAlias) => {
  _data(_scope["#text/2"], textAlias);
};
export const _text_ = /* @__PURE__ */_value("text", (_scope, text) => {
  _data(_scope["#text/1"], text);
  _textAlias(_scope, text);
});
export const _pattern__ = /* @__PURE__ */_value("_pattern_", (_scope, _pattern_) => _text_(_scope, _pattern_.text));
const _onClick__effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/components/my-button.marko_0_onClick", _scope => {
  const {
    onClick
  } = _scope;
  _on(_scope["#button/0"], "click", onClick);
});
export const _onClick_ = /* @__PURE__ */_value("onClick", (_scope, onClick) => _queueEffect(_scope, _onClick__effect));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _onClick_(_scope, input.onClick);
  _pattern__(_scope, input.value);
});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias-within-pattern/components/my-button.marko");
export const _template_ = "<button><!> <!></button>";
export const _walks_ = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _textAlias = (_scope, textAlias) => {
  _$.data(_scope["#text/2"], textAlias);
};
export const _text_ = /* @__PURE__ */_$.value("text", (_scope, text) => {
  _$.data(_scope["#text/1"], text);
  _textAlias(_scope, text);
});
const _onClick__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias/components/my-button.marko_0_onClick", _scope => {
  const {
    onClick
  } = _scope;
  _$.on(_scope["#button/0"], "click", onClick);
});
export const _onClick_ = /* @__PURE__ */_$.value("onClick", (_scope, onClick) => _onClick__effect(_scope));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _onClick_(_scope, input.onClick);
  _text_(_scope, input.text);
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-component-input-same-source-alias/components/my-button.marko", _template_, _walks_, _setup_, void 0, () => _params__);
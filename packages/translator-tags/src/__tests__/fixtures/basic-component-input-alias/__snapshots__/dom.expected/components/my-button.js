export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-component-input-alias/components/my-button.marko_0_onClick", _scope => {
  const {
    onClick
  } = _scope;
  _$.on(_scope["#button/0"], "click", onClick);
});
export const _onClick_ = /* @__PURE__ */_$.value("onClick", (_scope, onClick) => _onClick__effect(_scope));
export const _text_ = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/1"], text));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _text_(_scope, input.text);
  _onClick_(_scope, input.onClick);
});
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/basic-component-input-alias/components/my-button.marko");
export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
export const _setup_ = () => {};
import { on as _on, data as _data, value as _value, effect as _effect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export const _text_ = /* @__PURE__ */_value("text", (_scope, text) => _data(_scope["#text/1"], text));
const _onClick__effect = _effect("packages/translator-tags/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko_0_onClick", _scope => {
  const {
    onClick
  } = _scope;
  _on(_scope["#button/0"], "click", onClick);
});
export const _onClick_ = /* @__PURE__ */_value("onClick", (_scope, onClick) => _onClick__effect(_scope));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _onClick_(_scope, input.onClick);
  _text_(_scope, input.text);
});
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/basic-component-attrs/components/my-button.marko");
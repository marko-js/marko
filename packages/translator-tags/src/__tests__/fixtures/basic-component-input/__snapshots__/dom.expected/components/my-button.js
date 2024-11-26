export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _text_ = _$.param("text", text => _$.data("#text/1", text));
const _onClick__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-component-input/components/my-button.marko_0_onClick", ({
  onClick
}, _scope) => _$.on(_scope["#button/0"], "click", onClick));
export const _onClick_ = _$.param("onClick", onClick => _onClick__effect());
export const _input_ = _$.param("input", input => {
  _onClick_(input.onClick);
  _text_(input.text);
});
export const _params__ = _$.param("_params_", _params_ => _input_(_params_[0]));
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-component-input/components/my-button.marko", _template_, _walks_, _setup_, void 0, () => _params__);
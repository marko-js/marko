export const _template_ = "<button><!></button>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _content_input = _$.dynamicTagAttrs("#text/1");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/1", _scope => _content_input(_scope, () => ({})), () => _content_input);
const _attrs__effect = _$.effect("__tests__/tags/FancyButton.marko_0_attrs", _scope => _$.attrsEvents(_scope, "#button/0"));
export const _attrs_ = (_scope, attrs) => {
  _$.attrs(_scope, "#button/0", attrs);
  _attrs__effect(_scope);
};
export const _content_ = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTagName(_scope, content), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _attrs_(_scope, input);
  _content_(_scope, input.content);
}, () => _content_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/FancyButton.marko", _template_, _walks_, _setup_, void 0, () => _params__);
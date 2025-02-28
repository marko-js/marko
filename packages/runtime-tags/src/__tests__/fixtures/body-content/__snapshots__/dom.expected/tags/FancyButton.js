export const _template_ = "<button><!></button>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
const _attrs__effect = _$.effect("__tests__/tags/FancyButton.marko_0_attrs", _scope => _$.attrsEvents(_scope, "#button/0"));
export const _attrs_ = (_scope, attrs) => {
  _$.attrs(_scope, "#button/0", attrs);
  _attrs__effect(_scope);
};
export const _content_ = /* @__PURE__ */_$.value("content/4", (_scope, content) => _dynamicTag(_scope, content));
export const _input_ = /* @__PURE__ */_$.value("input/3", (_scope, input) => {
  _attrs_(_scope, input);
  _content_(_scope, input.content);
});
export const _params__ = /* @__PURE__ */_$.value("_params_/2", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/FancyButton.marko", _template_, _walks_, _setup_, () => _params__);
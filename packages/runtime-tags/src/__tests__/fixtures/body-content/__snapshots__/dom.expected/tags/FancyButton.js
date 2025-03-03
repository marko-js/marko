export const _template_ = "<button><!></button>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
const _attrs_effect = _$.effect("__tests__/tags/FancyButton.marko_0_attrs", _scope => _$.attrsEvents(_scope, "#button/0"));
const _attrs = (_scope, attrs) => {
  _$.attrs(_scope, "#button/0", attrs);
  _attrs_effect(_scope);
};
const _content = /* @__PURE__ */_$.value("content", (_scope, content) => _dynamicTag(_scope, content));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _attrs(_scope, input);
  _content(_scope, input.content);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/FancyButton.marko", _template_, _walks_, _setup_, _input_);
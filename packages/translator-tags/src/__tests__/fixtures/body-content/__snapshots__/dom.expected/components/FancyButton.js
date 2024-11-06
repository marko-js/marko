export const _template_ = "<button><!></button>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _renderBody_input = _$.dynamicTagAttrs("#text/1");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/1", _scope => _renderBody_input(_scope, () => ({})), () => _renderBody_input);
const _attrs__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/body-content/components/FancyButton.marko_0_attrs", _scope => {
  const {
    attrs
  } = _scope;
  _$.attrsEvents(_scope, "#button/0");
});
export const _attrs_ = (_scope, attrs) => {
  _$.attrs(_scope, "#button/0", attrs);
  _attrs__effect(_scope);
};
export const _renderBody_ = /* @__PURE__ */_$.value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _attrs_(_scope, input);
  _renderBody_(_scope, input.renderBody);
}, () => _renderBody_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/body-content/components/FancyButton.marko", _template_, _walks_, _setup_, void 0, () => _params__);
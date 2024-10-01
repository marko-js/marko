export const _template_ = "<button><!></button>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = () => {};
import { attrs as _attrs, attrsEvents as _attrsEvents, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1");
const _attrs__effect = _register("packages/translator-tags/src/__tests__/fixtures/body-content/components/FancyButton.marko_0_attrs", _scope => _attrsEvents(_scope, "#button/0"));
export const _attrs_ = (_scope, attrs) => {
  _attrs(_scope, "#button/0", attrs);
  _queueEffect(_scope, _attrs__effect);
};
export const _renderBody_ = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _attrs_(_scope, input);
  _renderBody_(_scope, input.renderBody);
}, () => _renderBody_);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/body-content/components/FancyButton.marko");
import { on as _on, conditional as _conditional, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1");
export const _renderBody_ = /* @__PURE__ */_value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), void 0, _dynamicTagName);
const _onClick__effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick", _scope => {
  const {
    onClick
  } = _scope;
  _on(_scope["#button/0"], "click", onClick);
});
export const _onClick_ = /* @__PURE__ */_value("onClick", (_scope, onClick) => _queueEffect(_scope, _onClick__effect));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => {
  _onClick_(_scope, input.onClick);
  _renderBody_(_scope, input.renderBody);
}, void 0, _renderBody_);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), void 0, _input_);
export const _template_ = "<button><!></button>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko");
export const _template_ = "<button><!></button>";
export const _walks_ = /* get, next(1), replace, out(1) */" D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _renderBody_input = _$.dynamicTagAttrs("#text/1");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/1", _scope => _renderBody_input(_scope, () => ({})), () => _renderBody_input);
export const _renderBody_ = /* @__PURE__ */_$.value("renderBody", (_scope, renderBody) => _dynamicTagName(_scope, renderBody), () => _dynamicTagName);
const _onClick__effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick", _scope => {
  const {
    onClick
  } = _scope;
  _$.on(_scope["#button/0"], "click", onClick);
});
export const _onClick_ = /* @__PURE__ */_$.value("onClick", (_scope, onClick) => _onClick__effect(_scope));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _onClick_(_scope, input.onClick);
  _renderBody_(_scope, input.renderBody);
}, () => _renderBody_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko", _template_, _walks_, _setup_, void 0, () => _params__);
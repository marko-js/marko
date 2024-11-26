export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _inputRenderBody_input = _$.dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _inputRenderBody_input(_scope, () => ({})), () => _inputRenderBody_input);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), () => _dynamicTagName);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-closures/components/custom-tag.marko", _template_, _walks_, _setup_, void 0, () => _params__);
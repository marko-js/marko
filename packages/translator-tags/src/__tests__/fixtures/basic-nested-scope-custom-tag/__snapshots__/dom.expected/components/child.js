export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _inputRenderBody_input = _$.dynamicTagAttrs("#text/0");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _inputRenderBody_input(_scope, () => ({})), () => _inputRenderBody_input);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), () => _dynamicTagName);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/components/child.marko");
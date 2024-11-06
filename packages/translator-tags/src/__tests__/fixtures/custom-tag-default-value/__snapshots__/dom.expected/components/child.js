export const _template_ = "<!> ";
export const _walks_ = /* replace, over(2) */"%c";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _value = /* @__PURE__ */_$.value("value", (_scope, value) => _$.data(_scope["#text/0"], value));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _value(_scope, input.value));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/custom-tag-default-value/components/child.marko", _template_, _walks_, _setup_, void 0, () => _params__);
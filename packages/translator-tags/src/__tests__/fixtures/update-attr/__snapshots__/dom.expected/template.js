export const _template_ = "<div a=0></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_value_ = /* @__PURE__ */_$.value("input_value", (_scope, input_value) => _$.attr(_scope["#div/0"], "b", input_value));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_value_(_scope, input.value));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/update-attr/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);
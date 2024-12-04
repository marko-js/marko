export const _template_ = "Hello <!>!";
export const _walks_ = /* over(1), replace, over(2) */"b%c";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input_name_ = /* @__PURE__ */_$.value("input_name", (_scope, input_name) => _$.data(_scope["#text/0"], input_name));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_name_(_scope, input.name));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/custom-tag-template/hello.marko", _template_, _walks_, _setup_, void 0, () => _params__);
export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _className_ = /* @__PURE__ */_$.value("className", (_scope, className) => _$.classAttr(_scope["#div/0"], className));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _className_(_scope, input.class));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/attr-class/components/custom-tag.marko");
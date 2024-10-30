export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import { styleAttr as _styleAttr, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export const _style_ = /* @__PURE__ */_value("style", (_scope, style) => _styleAttr(_scope["#div/0"], style));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _style_(_scope, input.style));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/attr-style/components/custom-tag.marko");
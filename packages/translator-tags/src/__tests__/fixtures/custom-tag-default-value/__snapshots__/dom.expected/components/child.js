export const _template_ = "<!> ";
export const _walks_ = /* replace, over(2) */"%c";
export const _setup_ = () => {};
import { data as _data, value as _value2, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _value = /* @__PURE__ */_value2("value", (_scope, value) => _data(_scope["#text/0"], value));
export const _input_ = /* @__PURE__ */_value2("input", (_scope, input) => _value(_scope, input.value));
export const _params__ = /* @__PURE__ */_value2("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/custom-tag-default-value/components/child.marko");
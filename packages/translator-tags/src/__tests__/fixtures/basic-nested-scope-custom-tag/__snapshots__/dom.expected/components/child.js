import { conditional as _conditional, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0");
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _dynamicTagName(_scope, input.renderBody), void 0, _dynamicTagName);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), void 0, _input_);
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _params__), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/components/child.marko");
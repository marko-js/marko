export const _template_ = "<div> </div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
import { data as _data, tagVarSignal as _tagVarSignal, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _data(_scope["#text/0"], input));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _tagVarSignal(_scope, "hello from other");
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-single-arg/components/custom-tag.marko");
export const _template_ = "<div>Id is <!></div>";
export const _walks_ = /* next(1), over(1), replace, out(1) */"Db%l";
export const _setup_ = () => {};
import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export const _id_ = /* @__PURE__ */_value("id", (_scope, id) => _data(_scope["#text/0"], id));
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _id_(_scope, input.id));
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/components/child.marko");
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = () => {};
import { createRenderer as _createRenderer, register as _register, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _tagNameBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-dynamic-native-tag/template.marko_1_renderer", /* @__PURE__ */_createRenderer("Hello World", ""));
const _tagName_input = _dynamicTagAttrs("#text/0", _tagNameBody);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _tagName_input(_scope, () => ({
  class: ["a", "b"]
})), () => _tagName_input);
export const _tagName_ = /* @__PURE__ */_value("tagName", (_scope, tagName) => _dynamicTagName(_scope, tagName || _tagNameBody), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_value("input", (_scope, input) => _tagName_(_scope, input.tagName), () => _tagName_);
export const _params__ = /* @__PURE__ */_value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/basic-dynamic-native-tag/template.marko");
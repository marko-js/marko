export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tagNameBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-dynamic-native-tag/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("Hello World", ""));
const _tagName_input = _$.dynamicTagAttrs("#text/0", _tagNameBody);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _tagName_input(_scope, () => ({
  class: ["a", "b"]
})), () => _tagName_input);
export const _tagName_ = /* @__PURE__ */_$.value("tagName", (_scope, tagName) => _dynamicTagName(_scope, tagName || _tagNameBody(_scope)), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _tagName_(_scope, input.tagName), () => _tagName_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_, void 0, void 0, () => _params__), "packages/translator-tags/src/__tests__/fixtures/basic-dynamic-native-tag/template.marko");
export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tagName_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("Hello World", ""));
const _tagName_input = _$.dynamicTagAttrs("#text/0", _tagName_content);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", _scope => _tagName_input(_scope, () => ({
  class: ["a", "b"]
})), () => _tagName_input);
export const _tagName_ = /* @__PURE__ */_$.value("tagName", (_scope, tagName) => _dynamicTagName(_scope, tagName || _tagName_content(_scope)), () => _dynamicTagName);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _tagName_(_scope, input.tagName), () => _tagName_);
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, void 0, () => _params__);
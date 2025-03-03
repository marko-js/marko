export const _template_ = "<!><!><!>";
export const _walks_ = /* replace, over(1) */"D%bD";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tagName_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello World");
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", _tagName_content);
export const _tagName_ = /* @__PURE__ */_$.value("tagName", (_scope, tagName) => _dynamicTag(_scope, tagName, () => ({
  class: ["a", "b"]
})));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _tagName_(_scope, input.tagName));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);
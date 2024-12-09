export const _template_ = "<!><button></button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */"D b%bD";
import child from "./components/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tagName_input = _$.dynamicTagAttrs("#text/1");
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/1", _scope => _tagName_input(_scope, () => ({
  id: "dynamic"
})), () => _tagName_input);
const _tagName_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko_0_tagName", (_scope, {
  tagName
}) => _$.on(_scope["#button/0"], "click", function () {
  _tagName(_scope, tagName === child ? "div" : child);
}));
const _tagName = /* @__PURE__ */_$.state("tagName", (_scope, tagName) => {
  _tagName_effect(_scope);
  _dynamicTagName(_scope, tagName);
}, () => _dynamicTagName);
export function _setup_(_scope) {
  _tagName(_scope, child);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko", _template_, _walks_, _setup_);
export const _template_ = "<button></button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import child from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
const _tagName_effect = _$.effect("__tests__/template.marko_0_tagName", (_scope, {
  "tagName/2": tagName
}) => _$.on(_scope["#button/0"], "click", function () {
  _tagName(_scope, tagName === child ? "div" : child);
}));
const _tagName = /* @__PURE__ */_$.state("tagName/2", (_scope, tagName) => {
  _dynamicTag(_scope, tagName, () => ({
    id: "dynamic"
  }));
  _tagName_effect(_scope);
});
export function _setup_(_scope) {
  _tagName(_scope, child);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
export const _template_ = "<!><!><button></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import child1 from "./tags/child1.marko";
import child2 from "./tags/child2.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_tagName_val = /* @__PURE__ */_$.intersection(4, _scope => {
  const {
    "tagName/2": tagName,
    "val/3": val
  } = _scope;
  _dynamicTag(_scope, tagName, () => ({
    value: val
  }));
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const _val = /* @__PURE__ */_$.state("val/3", (_scope, val) => _expr_tagName_val(_scope));
const _tagName_effect = _$.effect("__tests__/template.marko_0_tagName", (_scope, {
  "tagName/2": tagName
}) => _$.on(_scope["#button/1"], "click", function () {
  _tagName(_scope, tagName === child1 ? child2 : child1);
}));
const _tagName = /* @__PURE__ */_$.state("tagName/2", (_scope, tagName) => {
  _expr_tagName_val(_scope);
  _tagName_effect(_scope);
});
export function _setup_(_scope) {
  _tagName(_scope, child1);
  _val(_scope, 3);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
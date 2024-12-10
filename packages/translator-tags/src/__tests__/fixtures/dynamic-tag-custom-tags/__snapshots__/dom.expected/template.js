export const _template_ = "<!><!><button></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import child1 from "./components/child1.marko";
import child2 from "./components/child2.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _tagName_input = _$.dynamicTagAttrs("#text/0");
const _expr_Text_val = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    val
  } = _scope;
  _tagName_input(_scope, () => ({
    value: val
  }));
}, () => _tagName_input);
const _dynamicTagName = /* @__PURE__ */_$.conditional("#text/0", 0, () => _expr_Text_val);
const _val = /* @__PURE__ */_$.state("val", 0, () => _expr_Text_val);
const _tagName_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName", (_scope, {
  tagName
}) => _$.on(_scope["#button/1"], "click", function () {
  _tagName(_scope, tagName === child1 ? child2 : child1);
}));
const _tagName = /* @__PURE__ */_$.state("tagName", (_scope, tagName) => {
  _tagName_effect(_scope);
  _dynamicTagName(_scope, tagName);
}, () => _dynamicTagName);
export function _setup_(_scope) {
  _tagName(_scope, child1);
  _val(_scope, 3);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko", _template_, _walks_, _setup_);
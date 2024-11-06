export const _template_ = "<!><!><button></button>";
export const _walks_ = /* replace, over(1), get, over(1) */"D%b b";
import child1 from "./components/child1.marko";
import child2 from "./components/child2.marko";
import { on as _on, dynamicTagAttrs as _dynamicTagAttrs, intersection as _intersection, conditional as _conditional, state as _state, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _tagName_input = _dynamicTagAttrs("#text/0");
const _expr_Text_val = /* @__PURE__ */_intersection(2, _scope => {
  const {
    val
  } = _scope;
  _tagName_input(_scope, () => ({
    value: val
  }));
}, () => _tagName_input);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", null, () => _expr_Text_val);
const _val = /* @__PURE__ */_state("val", null, () => _expr_Text_val);
const _onClick = _scope => {
  const {
    tagName
  } = _scope;
  return function () {
    _tagName(_scope, tagName === child1 ? child2 : child1);
  };
};
const _tagName_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko_0_tagName", _scope => _on(_scope["#button/1"], "click", _onClick(_scope)));
const _tagName = /* @__PURE__ */_state("tagName", (_scope, tagName) => {
  _queueEffect(_scope, _tagName_effect);
  _dynamicTagName(_scope, tagName);
}, () => _dynamicTagName);
export function _setup_(_scope) {
  _tagName(_scope, child1);
  _val(_scope, 3);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-tags/template.marko");
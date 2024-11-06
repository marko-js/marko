export const _template_ = "<!><button></button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */"D b%bD";
import child from "./components/child.marko";
import { on as _on, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, register as _register, queueEffect as _queueEffect, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _tagName_input = _dynamicTagAttrs("#text/1");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1", _scope => _tagName_input(_scope, () => ({
  id: "dynamic"
})), () => _tagName_input);
const _onClick = _scope => {
  const {
    tagName
  } = _scope;
  return function () {
    _tagName(_scope, tagName === child ? "div" : child);
  };
};
const _tagName_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko_0_tagName", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _tagName = /* @__PURE__ */_state("tagName", (_scope, tagName) => {
  _queueEffect(_scope, _tagName_effect);
  _dynamicTagName(_scope, tagName);
}, () => _dynamicTagName);
export function _setup_(_scope) {
  _tagName(_scope, child);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko");
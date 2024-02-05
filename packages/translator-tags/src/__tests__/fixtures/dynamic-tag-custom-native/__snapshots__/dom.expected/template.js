import child from "./components/child.marko";
import { on as _on, queueSource as _queueSource, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _tagName_input = _dynamicTagAttrs("#text/1");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1", _scope => _tagName_input(_scope, () => ({
  id: "dynamic"
})), void 0, _tagName_input);
const _tagName_effect = _register("packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko_0_tagName", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    tagName
  } = _scope;
  _queueSource(_scope, _tagName, tagName === child ? "div" : child);
}));
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName) => {
  _queueEffect(_scope, _tagName_effect);
  _dynamicTagName(_scope, tagName);
}, void 0, _dynamicTagName);
const _setup = _scope => {
  _tagName(_scope, child);
};
export const template = "<button></button><!>";
export const walks = /* get, over(1), replace, over(1) */" b%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko");
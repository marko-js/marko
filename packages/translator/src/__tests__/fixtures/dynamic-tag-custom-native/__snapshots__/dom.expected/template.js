import child from "./components/child.marko";
import { on as _on, queueSource as _queueSource, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, register as _register, queueEffect as _queueEffect, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicTagName = /* @__PURE__ */_conditional("#text/1", (_scope, _dirty) => {
  let _dynamicBody_attrs;
  if (_dirty) {
    _dynamicBody_attrs = () => ({
      id: "dynamic"
    });
  }
  _dynamicTagAttrs(_scope, "#text/1", _dynamicBody_attrs, null, _dirty);
});
const _tagName_effect = _register("packages/translator/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko_0_tagName", _scope => _on(_scope["#button/0"], "click", function () {
  const tagName = _scope["tagName"];
  _queueSource(_scope, _tagName, tagName === child ? "div" : child);
}));
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName, _dirty) => {
  let _dynamicTagName_value;
  if (_dirty) {
    _queueEffect(_scope, _tagName_effect);
    _dynamicTagName_value = tagName;
  }
  _dynamicTagName(_scope, _dynamicTagName_value, _dirty);
});
const _setup = _scope => {
  _tagName(_scope, child);
};
export const template = "<button></button><!>";
export const walks = /* get, over(1), replace, over(1) */" b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-native/template.marko");
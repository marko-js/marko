import { dynamicTagAttrs as _dynamicTagAttrs, createRenderer as _createRenderer, conditional as _conditional, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _tagNameBody = /* @__PURE__ */_createRenderer("Hello World", "");
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", (_scope, _dirty) => {
  let _tagName_input;
  if (_dirty) {
    _tagName_input = () => ({
      class: ["a", "b"]
    });
  }
  _dynamicTagAttrs(_scope, "#text/0", _tagName_input, _tagNameBody, _dirty);
});
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName, _dirty) => {
  let _dynamicTagName_value;
  if (_dirty) {
    _dynamicTagName_value = tagName || _tagNameBody;
  }
  _dynamicTagName(_scope, _dynamicTagName_value, _dirty);
});
export const attrs = (_scope, _destructure, _dirty = true) => {
  let tagName;
  if (_dirty) ({
    tagName
  } = _destructure);
  _tagName(_scope, tagName, _dirty);
};
export { _tagName };
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/basic-dynamic-native-tag/template.marko");
import { createRenderer as _createRenderer, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, value as _value, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _tagNameBody = /* @__PURE__ */_createRenderer("Hello World", "");
const _tagName_input = _dynamicTagAttrs("#text/0", _tagNameBody);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _tagName_input(_scope, () => ({
  class: ["a", "b"]
})), void 0, _tagName_input);
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName) => _dynamicTagName(_scope, tagName || _tagNameBody), void 0, _dynamicTagName);
export const attrs = (_scope, _destructure, _clean) => {
  let tagName;
  if (!_clean) ({
    tagName
  } = _destructure);
  _tagName(_scope, tagName, _clean);
};
export { _tagName };
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator/src/__tests__/fixtures/basic-dynamic-native-tag/template.marko");
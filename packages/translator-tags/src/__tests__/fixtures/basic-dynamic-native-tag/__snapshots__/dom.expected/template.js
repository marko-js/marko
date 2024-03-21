import { createRenderer as _createRenderer, register as _register, dynamicTagAttrs as _dynamicTagAttrs, conditional as _conditional, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _tagNameBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-dynamic-native-tag/template.marko_1_renderer", /* @__PURE__ */_createRenderer("Hello World", ""));
const _tagName_input = _dynamicTagAttrs("#text/0", _tagNameBody);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", _scope => _tagName_input(_scope, () => ({
  class: ["a", "b"]
})), void 0, _tagName_input);
const _tagName = /* @__PURE__ */_value("tagName", (_scope, tagName) => _dynamicTagName(_scope, tagName || _tagNameBody), void 0, _dynamicTagName);
const _destructure2 = (_scope, _destructure, _clean) => {
  let tagName;
  if (!_clean) ({
    tagName
  } = _destructure);
  _tagName(_scope, tagName, _clean);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input), void 0, _destructure2);
export const args = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const template = "<!><!><!>";
export const walks = /* replace, over(1) */"D%bD";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/basic-dynamic-native-tag/template.marko");
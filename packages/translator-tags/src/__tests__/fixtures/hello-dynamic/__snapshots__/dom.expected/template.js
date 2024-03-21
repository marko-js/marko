import { data as _data, html as _html, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _data(_scope["#text/0"], input.name);
  _html(_scope, input.name, "#text/1");
  _html(_scope, input.missing, "#text/2");
});
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export const template = "Hello <!>! Hello <!>! Hello <!>!";
export const walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/hello-dynamic/template.marko");
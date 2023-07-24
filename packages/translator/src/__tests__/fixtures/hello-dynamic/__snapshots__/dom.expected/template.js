import { data as _data, html as _html, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _data(_scope["#text/0"], input.name);
  _html(_scope, input.name, "#text/1");
  _html(_scope, input.missing, "#text/2");
});
export const attrs = _input;
export { _input };
export const template = "Hello <!>! Hello <!>! Hello <!>!";
export const walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, void 0, "packages/translator/src/__tests__/fixtures/hello-dynamic/template.marko");
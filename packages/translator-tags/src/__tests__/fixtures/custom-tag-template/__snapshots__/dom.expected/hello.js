import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => _data(_scope["#text/0"], input.name));
export const attrs = _input;
export { _input };
export const template = "Hello <!>!";
export const walks = /* over(1), replace, over(2) */"b%c";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator-tags/src/__tests__/fixtures/custom-tag-template/hello.marko");
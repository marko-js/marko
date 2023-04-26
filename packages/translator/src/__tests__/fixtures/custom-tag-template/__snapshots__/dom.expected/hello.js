import { data as _data, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => _data(_scope["#text/0"], input.name));
export const attrs = _input;
export { _input };
export const template = "Hello <!>!";
export const walks = /* over(1), replace, over(2) */"b%c";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/custom-tag-template/hello.marko");
import { data as _data, value as _value2, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _value = /* @__PURE__ */_value2("value", (_scope, value) => _data(_scope["#text/0"], value));
const _input = /* @__PURE__ */_value2("input", (_scope, input) => _value(_scope, input.value));
export const attrs = _input;
export { _input };
export const template = "<!> ";
export const walks = /* replace, over(2) */"%c";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator-tags/src/__tests__/fixtures/custom-tag-default-value/components/child.marko");
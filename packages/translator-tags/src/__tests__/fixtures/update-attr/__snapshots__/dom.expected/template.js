import { attr as _attr, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => _attr(_scope["#div/0"], "b", input.value));
export const attrs = _input;
export { _input };
export const template = "<div a=0></div>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator-tags/src/__tests__/fixtures/update-attr/template.marko");
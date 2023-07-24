import { attr as _attr, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => _attr(_scope["#div/0"], "foo", `Hello ${input.name}`));
export const attrs = _input;
export { _input };
export const template = "<div></div>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, void 0, "packages/translator/src/__tests__/fixtures/attr-template-literal-escape/template.marko");
import { classAttr as _classAttr, attr as _attr, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _classAttr(_scope["#div/0"], input.foo);
  _attr(_scope["#div/0"], "foo", 'a' + input.foo + 'b');
  _attr(_scope["#div/0"], "bar", `a ${input.bar} b`);
  _attr(_scope["#div/0"], "nested", `a ${input.foo + ` nested ${input.bar}`} b`);
});
export const attrs = _input;
export { _input as _apply_input };
export const template = "<div></div>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/attr-escape/template.marko");
import { classAttr as _classAttr, attr as _attr, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => {
  _classAttr(_scope["#div/0"], input.foo);
  _attr(_scope["#div/0"], "foo", 'a' + input.foo + 'b');
  _attr(_scope["#div/0"], "bar", `a ${input.bar} b`);
  _attr(_scope["#div/0"], "nested", `a ${input.foo + ` nested ${input.bar}`} b`);
});
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export { _input };
export const template = "<div></div>";
export const walks = /* get, over(1) */" b";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/attr-escape/template.marko");
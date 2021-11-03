import { classAttr as _classAttr, attr as _attr, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div></div>";
export const walks = " b";
export const hydrate = _register("src/__tests__/fixtures/attr-escape/template.marko", input => {
  _classAttr(input.className);

  _attr("foo", 'a' + input.foo + 'b');

  _attr("bar", `a ${input.foo} b`);
});
export default _createRenderFn(template, walks, ["className", "foo"], hydrate);
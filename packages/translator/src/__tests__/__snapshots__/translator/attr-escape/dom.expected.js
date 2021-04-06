import { classAttr as _classAttr, walk as _walk, attr as _attr, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<div></div>";
export const walks = " b";
export const hydrate = _register("ItejCh5k", input => {
  _walk();

  _classAttr(input.className);

  _attr("foo", 'a' + input.foo + 'b');

  _attr("bar", `a ${input.foo} b`);
});
export default _createRenderFn(template, walks, ["className", "foo"], hydrate);
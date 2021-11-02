import { attr as _attr, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<div></div>";
export const walks = "!:";
export const hydrate = _register("ItejCh5k", input => {
  _attr("class", input.className);

  _attr("foo", 'a' + input.foo + 'b');

  _attr("bar", `a ${input.foo} b`);
});
export default _createRenderFn(template, walks, ["className", "foo"], hydrate);
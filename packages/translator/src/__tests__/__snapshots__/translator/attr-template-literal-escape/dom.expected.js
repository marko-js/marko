import { attr as _attr, walk as _walk, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<div></div>";
export const walks = " b";
export const hydrate = _register("YAPeYJGX", input => {
  _walk();

  _attr("foo", `Hello ${input.name}`);
});
export default _createRenderFn(template, walks, ["name"], hydrate);
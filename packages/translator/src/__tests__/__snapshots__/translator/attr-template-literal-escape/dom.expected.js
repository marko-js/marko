import { attr as _attr, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<div></div>";
export const walks = "!]";
export const hydrate = _register("YAPeYJGX", input => {
  _attr("foo", `Hello ${input.name}`);
});
export default _createRenderFn(template, walks, ["name"], hydrate);
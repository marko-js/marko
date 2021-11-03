import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div></div>";
export const walks = "b";
export const hydrate = _register("src/__tests__/fixtures/if-tag/template.marko", input => {
  if (input.a + input.b) {}

  if (input.a, input.b) {}

  if (input.x) {} else if (input.y) {} else {}
});
export default _createRenderFn(template, walks, ["a", "b", "x", "y"], hydrate);
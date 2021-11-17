import { attr as _attr, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div></div>";
export const walks = " b";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/attr-template-literal-escape/template.marko", input => {
  _attr("foo", `Hello ${input.name}`);
});
export default _createRenderFn(template, walks, ["name"], hydrate);
import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div></div>";
export const walks = "b";
export const hydrate = _register("src/__tests__/fixtures/custom-tag-separate-assets/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
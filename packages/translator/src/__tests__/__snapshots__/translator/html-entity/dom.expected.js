import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div>&lt;div&gt;</div>";
export const walks = "b";
export const hydrate = _register("src/__tests__/fixtures/html-entity/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
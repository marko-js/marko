import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div class=content>Hello</div>";
export const walks = "b";
export const hydrate = _register("src/__tests__/fixtures/style-tag/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
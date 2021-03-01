import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div>&lt;div&gt;</div>";
export const walks = ":";
export const hydrate = _register("packages/translator/test/fixtures/html-entity/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
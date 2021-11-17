import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "Hello Frank";
export const walks = "b";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/custom-tag-child-analyze/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
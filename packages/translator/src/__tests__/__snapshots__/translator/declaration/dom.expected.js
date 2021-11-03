import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<contact-info><name>Hello World</name></contact-info>";
export const walks = "b";
export const hydrate = _register("src/__tests__/fixtures/declaration/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
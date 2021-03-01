import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<input checked>";
export const walks = "]";
export const hydrate = _register("packages/translator/test/fixtures/attr-boolean/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
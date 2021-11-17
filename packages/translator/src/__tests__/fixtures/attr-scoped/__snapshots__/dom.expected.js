import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div id:scoped=1 aria-described-by:scoped=b></div>";
export const walks = "b";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/attr-scoped/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
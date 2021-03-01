import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div d=0 y=1></div>";
export const walks = "]";
export const hydrate = _register("packages/translator/test/fixtures/attr-falsey/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
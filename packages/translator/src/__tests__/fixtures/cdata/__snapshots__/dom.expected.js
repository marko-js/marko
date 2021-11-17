import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div>Here is a CDATA section:  with all kinds of unescaped text.</div>";
export const walks = "b";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/cdata/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
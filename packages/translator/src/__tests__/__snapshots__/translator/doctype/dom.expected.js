import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<html><head><title>Title of the document</title></head><body>The content of the document......</body></html>";
export const walks = "b";
export const hydrate = _register("src/__tests__/fixtures/doctype/template.marko", input => {});
export default _createRenderFn(template, walks, [], hydrate);
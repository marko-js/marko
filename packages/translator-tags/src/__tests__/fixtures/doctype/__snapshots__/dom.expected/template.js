export const template = "<html><head><title>Title of the document</title></head><body>The content of the document......</body></html>";
export const walks = /* over(1) */"b";
export const setup = function () {};
import { createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/doctype/template.marko");
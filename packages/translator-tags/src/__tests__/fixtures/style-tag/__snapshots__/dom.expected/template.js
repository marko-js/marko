import "virtual:./template.marko.css \n  .content {\n    color: green;\n  }\n";
export const template = "<div class=content>Hello</div>";
export const walks = /* over(1) */"b";
export const setup = function () {};
import { createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/style-tag/template.marko");
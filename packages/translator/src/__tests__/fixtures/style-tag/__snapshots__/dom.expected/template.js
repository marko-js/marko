import "virtual:./template.marko.css \n  .content {\n    color: green;\n  }\n";
export const template = "<div class=content>Hello</div>";
export const walks = /* over(1) */"b";
export const setup = function () {};
import { createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export default /* @__PURE__ */_createRenderFn(template, walks, setup, void 0, void 0, "packages/translator/src/__tests__/fixtures/style-tag/template.marko");
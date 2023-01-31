import "virtual:./template.marko.less \n  .content {\n    color: green;\n  }\n";
import "virtual:./template.marko.less \n  .content {\n    color: blue;\n  }\n";
import "virtual:./template.marko.less \n  .content {\n    color: red;\n  }\n";
export const template = "<div class=content>Hello</div>";
export const walks = /* over(1) */"b";
export const setup = function () {};
import { createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/style-tag-type/template.marko");
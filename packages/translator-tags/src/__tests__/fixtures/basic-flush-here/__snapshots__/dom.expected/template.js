export const template = "<h1>Hello World</h1><script>\n    console.log('Hello World');\n  </script>";
export const walks = /* over(2) */"c";
export const setup = function () {};
import { createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/basic-flush-here/template.marko");
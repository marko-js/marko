export const _template_ = "<div class=content>Hello</div>";
export const _walks_ = /* over(1) */"b";
export const _setup_ = () => {};
import "virtual:./template.marko.css \n  .content {\n    color: green;\n  }\n";
import { createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/style-tag/template.marko");
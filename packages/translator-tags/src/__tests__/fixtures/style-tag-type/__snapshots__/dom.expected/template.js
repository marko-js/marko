export const _template_ = "<div class=content>Hello</div>";
export const _walks_ = /* over(1) */"b";
export const _setup_ = () => {};
import "virtual:./template.marko.less \n  .content {\n    color: green;\n  }\n";
import "virtual:./template.marko.less \n  .content {\n    color: blue;\n  }\n";
import "virtual:./template.marko.less \n  .content {\n    color: red;\n  }\n";
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/style-tag-type/template.marko", _template_, _walks_, _setup_);
export const _template_ = "<div class=content>Hello</div>";
export const _walks_ = /* over(1) */"b";
export const _setup_ = () => {};
import "virtual:./template.marko.less \n  .content {\n    color: green;\n  }\n";
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);
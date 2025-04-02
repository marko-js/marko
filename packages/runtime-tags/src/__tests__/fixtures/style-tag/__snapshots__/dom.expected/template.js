export const _template = "<div class=content>Hello</div>";
export const _walks = /* over(1) */"b";
export const _setup = () => {};
import "virtual:./template.marko.css \n  .content {\n    color: green;\n  }\n";
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);
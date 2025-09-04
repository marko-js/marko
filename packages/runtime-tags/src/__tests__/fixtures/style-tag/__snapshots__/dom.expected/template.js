export const $template = "<div class=content>Hello</div>";
export const $walks = /* over(1) */"b";
export const $setup = () => {};
import "virtual:./template.marko.css \n  .content {\n    color: green;\n  }\n";
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
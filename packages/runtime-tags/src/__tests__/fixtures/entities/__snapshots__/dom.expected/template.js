export const $template = "Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;";
export const $walks = /* over(1) */"b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
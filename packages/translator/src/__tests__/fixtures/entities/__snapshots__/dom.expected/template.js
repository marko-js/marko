export const template = "Hello John &amp; Suzy Invalid Entity: &b ; Valid Numeric Entity: &#34; Valid Hexadecimal Entity: &#x00A2;";
export const walks = /* over(1) */"b";
export const setup = function () {};
import { createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export default /* @__PURE__ */_createRenderFn(template, walks, setup);
export const $template = "a";
export const $walks = /* over(1) */"b";
export function $setup() {
  throw new Error("ERROR!");
}
import * as _2 from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_2._template("__tests__/template.marko", $template, $walks, $setup);
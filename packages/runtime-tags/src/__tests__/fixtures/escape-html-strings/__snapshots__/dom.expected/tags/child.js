export const $template = "<span>child`\"'</span><span>${value}</span>";
export const $walks = /* over(2) */"c";
export const $setup = () => {};
const value = "No!!";
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup);
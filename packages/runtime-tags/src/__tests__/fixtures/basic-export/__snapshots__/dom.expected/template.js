export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
import { v } from "./exporter.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _._text($scope["#text/0"], v);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
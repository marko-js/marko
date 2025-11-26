export const $template = "<!><html><head></head><body>The content of the document......</body></html>";
export const $walks = /* over(2) */"c";
import * as _ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _._title("Title of the document");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
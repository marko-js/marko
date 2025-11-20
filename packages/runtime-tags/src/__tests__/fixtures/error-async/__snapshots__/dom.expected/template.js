export const $template = "a<!>b";
export const $walks = /* over(1), replace, over(2) */"b%c";
import { rejectAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
const $await_content = /* @__PURE__ */_._await_content("#text/0", "failed", /* over(1) */"b");
const $await_promise = /* @__PURE__ */_._await_promise("#text/0");
export function $setup($scope) {
  $await_content($scope);
  $await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
export const $template = "a<!>b";
export const $walks = /* over(1), replace, over(2) */"b%c";
import { rejectAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $await_content = /* @__PURE__ */_$.createRenderer("failed");
const $await = /* @__PURE__ */_$.awaitTag("#text/0", $await_content);
export function $setup($scope) {
  $await($scope, rejectAfter(new Error("ERROR!"), 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
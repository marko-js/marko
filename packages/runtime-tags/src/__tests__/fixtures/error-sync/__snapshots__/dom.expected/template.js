export const $template = "a";
export const $walks = /* over(1) */"b";
const $_ = $scope => {};
export function $setup($scope) {
  $_($scope, (() => {
    throw new Error("ERROR!");
  })());
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
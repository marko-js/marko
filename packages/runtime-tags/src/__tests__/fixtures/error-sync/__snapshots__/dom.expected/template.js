export const $template = "a";
export const $walks = /* over(1) */"b";
const $_ = $scope => {};
export function $setup($scope) {
  $_($scope, (() => {
    throw new Error("ERROR!");
  })());
}
import * as _2 from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_2._template("__tests__/template.marko", $template, $walks, $setup);
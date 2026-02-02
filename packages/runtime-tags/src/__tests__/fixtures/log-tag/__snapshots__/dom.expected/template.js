export const $template = "";
export const $walks = "";
const staticVar = "static var";
import * as _ from "@marko/runtime-tags/debug/dom";
const $tagVar = /* @__PURE__ */_._const("tagVar", $scope => console.log($scope.tagVar));
export function $setup($scope) {
  console.log("identifier");
  console.log(staticVar);
  $tagVar($scope, "tag var");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
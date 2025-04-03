export const $template = "<!>";
export const $walks = /* replace, over(1) */"%b";
import testLog from "./test-log";
const staticVar = "static var";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $output = /* @__PURE__ */_$.state("output/2", ($scope, output) => _$.data($scope["#text/0"], output));
const $tagVar = /* @__PURE__ */_$.value("tagVar", ($scope, tagVar) => console.log(tagVar));
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => $output($scope, JSON.stringify(testLog)));
export function $setup($scope) {
  console.log("identifier");
  console.log(staticVar);
  $tagVar($scope, "tag var");
  $output($scope, JSON.stringify(testLog));
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);
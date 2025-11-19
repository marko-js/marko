export const $template = "<!>";
export const $walks = /* replace, over(1) */"%b";
import testLog from "./test-log";
const staticVar = "static var";
import * as _ from "@marko/runtime-tags/debug/dom";
const $tagVar = /* @__PURE__ */_._const("tagVar", $scope => console.log($scope.tagVar));
const $output = /* @__PURE__ */_._let("output/2", $scope => _._text($scope["#text/0"], $scope.output));
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  debugger;
  $output($scope, JSON.stringify(testLog));
});
export function $setup($scope) {
  console.log("identifier");
  console.log(staticVar);
  $tagVar($scope, "tag var");
  $output($scope, JSON.stringify(testLog));
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
export const $template = "<!>";
export const $walks = /* replace, over(1) */"%b";
import testLog from "./test-log";
const staticVar = "static var";
import * as _ from "@marko/runtime-tags/debug/dom";
const $tagVar = /* @__PURE__ */_._const("tagVar", ($scope, tagVar) => console.log(tagVar));
const $output = /* @__PURE__ */_._let("output/2", ($scope, output) => _._text($scope["#text/0"], output));
const $setup__script = _._script("__tests__/template.marko_0", $scope => $output($scope, JSON.stringify(testLog)));
export function $setup($scope) {
  console.log("identifier");
  console.log(staticVar);
  $tagVar($scope, "tag var");
  $output($scope, JSON.stringify(testLog));
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
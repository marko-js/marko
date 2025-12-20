export const $template = "<ul></ul>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__setup = $scope => _._text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /* @__PURE__ */_._for_until("#ul/0", "<li> </li>", /* next(1), get, out(1) */"D l", $for_content__setup);
const $count = /* @__PURE__ */_._let("count/1", $scope => $for($scope, [$scope.count, 0, 1]));
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._el_read($scope["#ul/0"]).classList.add("mounted"));
export function $setup($scope) {
  $count($scope, 1);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
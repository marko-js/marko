export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
function identity(fn) {
  return fn;
}
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/0"], "click", identity(() => {
  $count($scope, $scope.count + 1);
})));
const $count = /* @__PURE__ */_._let("count/2", $scope => {
  _._text($scope["#text/1"], $scope.count);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
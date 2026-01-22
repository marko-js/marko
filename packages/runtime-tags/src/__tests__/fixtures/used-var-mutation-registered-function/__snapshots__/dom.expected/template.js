export const $template = "<button>Click <!></button>";
export const $walks = /* get, next(1), over(1), replace, out(1) */" Db%l";
const identity = fn => fn;
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/2", $scope => _._text($scope["#text/1"], $scope.value));
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/0"], "click", identity(() => {
  $value($scope, "updated");
})));
export function $setup($scope) {
  $value($scope, "initial");
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
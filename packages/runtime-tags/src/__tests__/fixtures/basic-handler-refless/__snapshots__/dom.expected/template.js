export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $data = /* @__PURE__ */_._let("data/2", $scope => _._text($scope["#text/1"], $scope.data));
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/0"], "click", function () {
  $data($scope, 1);
}));
export function $setup($scope) {
  $data($scope, 0);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
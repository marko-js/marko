export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x = /* @__PURE__ */_._let("x/1", ($scope, x) => _._text($scope["#text/0"], x));
const $setup__script = _._script("__tests__/template.marko_0", $scope => $x($scope, 2));
export function $setup($scope) {
  $x($scope, 1);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
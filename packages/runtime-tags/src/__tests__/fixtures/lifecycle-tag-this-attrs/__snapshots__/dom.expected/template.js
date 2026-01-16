export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x = /* @__PURE__ */_._let("x/1", $scope => _._text($scope["#text/0"], $scope.x));
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._lifecycle($scope, {
  x: 1,
  setX: function (value) {
    $x($scope, value);
  },
  onMount: function () {
    this.setX(this.x);
  }
}));
export function $setup($scope) {
  $x($scope, 0);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
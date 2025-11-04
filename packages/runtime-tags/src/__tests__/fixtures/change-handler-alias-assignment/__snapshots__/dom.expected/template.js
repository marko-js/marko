export const $template = "<button>Before</button>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $pattern2 = /* @__PURE__ */_._const("$pattern", $scope => $fooChange2($scope, $scope.$pattern.fooChange));
const $fooChange2__script = _._script("__tests__/template.marko_0_$fooChange", $scope => _._on($scope["#button/0"], "click", function () {
  $scope.$fooChange("After");
}));
const $fooChange2 = /* @__PURE__ */_._const("$fooChange", $fooChange2__script);
export function $setup($scope) {
  $pattern2($scope, {
    foo: 1,
    fooChange: $fooBar($scope)
  });
}
function $fooBar($scope) {
  return function (v) {
    _._el_read($scope["#button/0"]).textContent = v;
  };
}
_._resume("__tests__/template.marko_0/fooBar", $fooBar);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
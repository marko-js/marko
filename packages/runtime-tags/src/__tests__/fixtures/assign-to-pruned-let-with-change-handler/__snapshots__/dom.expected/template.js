export const $template = "<button>Before</button><div> </div>";
export const $walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _2 from "@marko/runtime-tags/debug/dom";
const $liveCount = /* @__PURE__ */_2._let("liveCount/2", $scope => _2._text($scope["#text/1"], $scope.liveCount));
const $count = /* @__PURE__ */_2._let("count/3");
const $setup__script = _2._script("__tests__/template.marko_0", $scope => _2._on($scope["#button/0"], "click", function (_, el) {
  el.textContent = "" + ($count($scope, 1));
}));
export function $setup($scope) {
  $liveCount($scope, 0);
  $count($scope, 0, $valueChange($scope));
  $setup__script($scope);
}
function $valueChange($scope) {
  return function (v) {
    $liveCount($scope, v);
  };
}
_2._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_2._template("__tests__/template.marko", $template, $walks, $setup);
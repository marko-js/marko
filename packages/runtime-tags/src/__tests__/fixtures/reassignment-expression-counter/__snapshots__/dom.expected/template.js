export const $template = "<button id=addTwo> </button><button id=triple> </button><button id=cube> </button>";
export const $walks = /* get, next(1), get, out(1), get, next(1), get, out(1), get, next(1), get, out(1) */" D l D l D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/template.marko_0_count", $scope => {
  _._on($scope["#button/0"], "click", function () {
    $count($scope, $scope.count + 2);
  });
  _._on($scope["#button/2"], "click", function () {
    $count($scope, $scope.count * 3);
  });
  _._on($scope["#button/4"], "click", function () {
    $count($scope, $scope.count ** 3);
  });
});
const $count = /* @__PURE__ */_._let("count/6", $scope => {
  _._text($scope["#text/1"], $scope.count);
  _._text($scope["#text/3"], $scope.count);
  _._text($scope["#text/5"], $scope.count);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
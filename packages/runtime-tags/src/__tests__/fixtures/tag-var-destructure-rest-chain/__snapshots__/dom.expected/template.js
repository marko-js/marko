export const $template = "<div class=abc><!> <!> <!></div><div class=rest> </div><div class=rest2> </div><div class=rest3> </div>";
export const $walks = /* next(1), replace, over(2), replace, over(2), replace, out(1), next(1), get, out(1), next(1), get, out(1), next(1), get, out(1) */"D%c%c%lD lD lD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $pattern2 = /* @__PURE__ */_._const("$pattern", $scope => {
  (({
    a,
    ...rest
  }) => $rest($scope, rest))($scope.$pattern);
  (({
    a,
    b,
    ...rest2
  }) => $rest2($scope, rest2))($scope.$pattern);
  (({
    a,
    b,
    c,
    ...rest3
  }) => $rest3($scope, rest3))($scope.$pattern);
  $a($scope, $scope.$pattern.a);
  $b($scope, $scope.$pattern.b);
  $c($scope, $scope.$pattern.c);
});
const $rest = /* @__PURE__ */_._const("rest", $scope => _._text($scope["#text/3"], JSON.stringify($scope.rest)));
const $rest2 = /* @__PURE__ */_._const("rest2", $scope => _._text($scope["#text/4"], JSON.stringify($scope.rest2)));
const $rest3 = /* @__PURE__ */_._const("rest3", $scope => _._text($scope["#text/5"], JSON.stringify($scope.rest3)));
const $a = /* @__PURE__ */_._const("a", $scope => _._text($scope["#text/0"], $scope.a));
const $b = /* @__PURE__ */_._const("b", $scope => _._text($scope["#text/1"], $scope.b));
const $c = /* @__PURE__ */_._const("c", $scope => _._text($scope["#text/2"], $scope.c));
export function $setup($scope) {
  $pattern2($scope, {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);
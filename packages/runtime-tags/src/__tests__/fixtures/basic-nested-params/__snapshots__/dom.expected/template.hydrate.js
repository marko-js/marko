// size: 505 (min) 293 (brotli)
const $dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $content__OR__value = _._or(5, ($scope) =>
    $dynamicTag($scope, $scope.d, () => [$scope.e]),
  ),
  $content = _._const(3, $content__OR__value),
  $value = _._const(4, $content__OR__value),
  $child_content2__outer = _._closure_get(2, ($scope) =>
    _._text($scope.a, $scope._.c),
  ),
  $child_content2__setup = $child_content2__outer,
  $child_content2 = _._content_resume(
    "b0",
    "<div><!>.<!></div>",
    "D%c%l",
    $child_content2__setup,
    ($scope, $params3) =>
      (($scope, inner) => _._text($scope.b, inner))($scope, $params3[0]),
  ),
  $child_content__y = _._closure_get(3, ($scope) =>
    $value($scope.a, $scope._.d),
  ),
  $child_content__outer__closure = _._closure($child_content2__outer),
  $child_content__outer = _._const(2, $child_content__outer__closure);
_._content_resume(
  "b1",
  "<div><!></div>",
  "/D%l&",
  ($scope) => {
    ($child_content__y($scope),
      $scope.a,
      $content($scope.a, $child_content2($scope)));
  },
  ($scope, $params2) => $child_content__outer($scope, $params2[0]),
);
const $x__script = _._script("b2", ($scope) =>
    _._on($scope.a, "click", function () {
      $x($scope, $scope.c + 1);
    }),
  ),
  $x = _._let(2, ($scope) => {
    ($value($scope.b, $scope.c), $x__script($scope));
  });
init();

// size: 545 (min) 289 (brotli)
const $dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $content__OR__value = _._or(5, ($scope) =>
    $dynamicTag($scope, $scope.d, () => [$scope.e]),
  ),
  $content = _._const(3, $content__OR__value),
  $value = _._const(4, $content__OR__value),
  $child_content2__outer = _._closure_get(2, ($scope) =>
    _._text($scope.a, $scope._.c),
  ),
  $child_content2__inner = _._const(3, ($scope) => _._text($scope.b, $scope.d)),
  $child_content2__setup = $child_content2__outer,
  $child_content2__$params = _._const(2, ($scope) =>
    $child_content2__inner($scope, $scope.c[0]),
  ),
  $child_content2 = _._content_resume(
    "b0",
    "<div><!>.<!></div>",
    "D%c%l",
    $child_content2__setup,
    $child_content2__$params,
  ),
  $child_content__y = _._closure_get(3, ($scope) =>
    $value($scope.a, $scope._.d),
  ),
  $child_content__$params = _._const(1, ($scope) =>
    $child_content__outer($scope, $scope.b[0]),
  ),
  $child_content__outer__closure = _._closure($child_content2__outer),
  $child_content__outer = _._const(2, $child_content__outer__closure);
_._content_resume(
  "b1",
  "<div><!></div>",
  "/D%l&",
  ($scope) => {
    ($scope.a,
      $content($scope.a, $child_content2($scope)),
      $child_content__y($scope));
  },
  $child_content__$params,
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

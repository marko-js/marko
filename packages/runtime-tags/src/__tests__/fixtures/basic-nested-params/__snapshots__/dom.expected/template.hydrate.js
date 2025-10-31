// size: 561 (min) 305 (brotli)
const $dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $content__OR__value = _._or(5, ($scope) =>
    $dynamicTag($scope, $scope[3], () => [$scope[4]]),
  ),
  $content = _._const(3, $content__OR__value),
  $value = _._const(4, $content__OR__value),
  $child_content2__outer = _._closure_get(2, ($scope) =>
    _._text($scope[0], $scope._[2]),
  ),
  $child_content2__inner = _._const(3, ($scope) =>
    _._text($scope[1], $scope[3]),
  ),
  $child_content2__setup = $child_content2__outer,
  $child_content2__$params = _._const(2, ($scope) =>
    $child_content2__inner($scope, $scope[2][0]),
  ),
  $child_content2 = _._content_resume(
    "b0",
    "<div><!>.<!></div>",
    "D%c%l",
    $child_content2__setup,
    $child_content2__$params,
  ),
  $child_content__y = _._closure_get(3, ($scope) =>
    $value($scope[0], $scope._[3]),
  ),
  $child_content__$params = _._const(1, ($scope) =>
    $child_content__outer($scope, $scope[1][0]),
  ),
  $child_content__outer__closure = _._closure($child_content2__outer),
  $child_content__outer = _._const(2, $child_content__outer__closure);
_._content_resume(
  "b1",
  "<div><!></div>",
  "/D%l&",
  ($scope) => {
    ($scope[0],
      $content($scope[0], $child_content2($scope)),
      $child_content__y($scope));
  },
  $child_content__$params,
);
const $x__script = _._script("b2", ($scope) =>
    _._on($scope[0], "click", function () {
      $x($scope, $scope[2] + 1);
    }),
  ),
  $x = _._let(2, ($scope) => {
    ($value($scope[1], $scope[2]), $x__script($scope));
  });
init();

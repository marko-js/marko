// size: 416 (min) 265 (brotli)
const $for_content2__outer__OR__inner = _._or(3, ($scope) =>
    (($scope, name) => _._text($scope.a, name))(
      $scope.a,
      `${$scope._.c}.${$scope.c}`,
    ),
  ),
  $for_content2__outer = _._for_closure(0, $for_content2__outer__OR__inner),
  $for_content2__setup = ($scope) => {
    ($for_content2__outer._($scope), $scope.a);
  },
  $for_content2__inner = _._const(2, $for_content2__outer__OR__inner),
  $for_content2__$params = ($scope, $params3) =>
    $for_content2__inner($scope, $params3[0]),
  $for_content__for = _._for_of(
    0,
    "<div> </div>",
    "/D l&",
    $for_content2__setup,
    $for_content2__$params,
  ),
  $for_content__items = _._for_closure(1, ($scope) =>
    $for_content__for($scope, [$scope._.c]),
  ),
  $for_content__setup = $for_content__items,
  $for_content__$params = ($scope, $params2) =>
    $for_content__outer($scope, $params2[0]),
  $for_content__outer = _._const(2, $for_content2__outer),
  $for = _._for_of(
    1,
    "<!><!><!>",
    "b%c",
    $for_content__setup,
    $for_content__$params,
  ),
  $items__script = _._script("b0", ($scope) =>
    _._on($scope.a, "click", function () {
      $items($scope, [...$scope.c, $scope.c?.length]);
    }),
  ),
  $items = _._let(2, ($scope) => {
    ($for($scope, [$scope.c]),
      $for_content__items($scope),
      $items__script($scope));
  });
init();

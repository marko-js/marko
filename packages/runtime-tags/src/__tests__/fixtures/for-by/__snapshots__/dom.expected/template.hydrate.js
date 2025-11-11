// size: 824 (min) 250 (brotli)
const $for_content5__text = _._const(3, ($scope) =>
    _._text($scope.a, $scope.d),
  ),
  $for_content5__$params = _._const(1, ($scope) =>
    $for_content5__$temp($scope, $scope.b?.[0]),
  ),
  $for_content5__$temp = _._const(2, ($scope) =>
    $for_content5__text($scope, $scope.c.text),
  ),
  $for_content4__text = _._const(3, ($scope) => _._text($scope.a, $scope.d)),
  $for_content4__$params = _._const(1, ($scope) =>
    $for_content4__$temp($scope, $scope.b?.[0]),
  ),
  $for_content4__$temp = _._const(2, ($scope) =>
    $for_content4__text($scope, $scope.c.text),
  ),
  $for_content3__text = _._const(3, ($scope) => _._text($scope.a, $scope.d)),
  $for_content3__$params = _._const(1, ($scope) =>
    $for_content3__$temp($scope, $scope.b?.[0]),
  ),
  $for_content3__$temp = _._const(2, ($scope) =>
    $for_content3__text($scope, $scope.c.text),
  ),
  $for_content2__text = _._const(3, ($scope) => _._text($scope.a, $scope.d)),
  $for_content2__$params = _._const(1, ($scope) =>
    $for_content2__$temp($scope, $scope.b?.[0]),
  ),
  $for_content2__$temp = _._const(2, ($scope) =>
    $for_content2__text($scope, $scope.c.text),
  ),
  $for_content__text = _._const(3, ($scope) => _._text($scope.a, $scope.d)),
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__$temp($scope, $scope.b?.[0]),
  ),
  $for_content__$temp = _._const(2, ($scope) =>
    $for_content__text($scope, $scope.c.text),
  ),
  $for = _._for_of(0, " ", " b", 0, $for_content__$params),
  $for2 = _._for_of(1, " ", " b", 0, $for_content2__$params),
  $for3 = _._for_of(2, " ", " b", 0, $for_content3__$params),
  $for4 = _._for_of(3, " ", " b", 0, $for_content4__$params),
  $for5 = _._for_of(4, " ", " b", 0, $for_content5__$params),
  $items__script = _._script("a0", ($scope) =>
    _._on($scope.f, "click", function () {
      $items($scope, [...$scope.g.slice(1), $scope.g?.[0]]);
    }),
  ),
  $items = _._let(6, ($scope) => {
    ($for($scope, [$scope.g, "id"]),
      $for2($scope, [$scope.g, (item) => item.id]),
      $for3($scope, [$scope.g, "id"]),
      $for4($scope, [$scope.g, (item) => item.id]),
      $for5($scope, [$scope.g, void 0]),
      $items__script($scope));
  });
init();

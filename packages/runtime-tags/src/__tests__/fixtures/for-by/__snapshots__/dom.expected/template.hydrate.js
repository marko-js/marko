// size: 664 (min) 236 (brotli)
const $for_content5__$params = ($scope, $params6) =>
    $for_content5__$temp($scope, $params6?.[0]),
  $for_content5__$temp = ($scope, $temp5) =>
    (($scope, text) => _._text($scope.a, text))($scope, $temp5.text),
  $for_content4__$params = ($scope, $params5) =>
    $for_content4__$temp($scope, $params5?.[0]),
  $for_content4__$temp = ($scope, $temp4) =>
    (($scope, text) => _._text($scope.a, text))($scope, $temp4.text),
  $for_content3__$params = ($scope, $params4) =>
    $for_content3__$temp($scope, $params4?.[0]),
  $for_content3__$temp = ($scope, $temp3) =>
    (($scope, text) => _._text($scope.a, text))($scope, $temp3.text),
  $for_content2__$params = ($scope, $params3) =>
    $for_content2__$temp($scope, $params3?.[0]),
  $for_content2__$temp = ($scope, $temp2) =>
    (($scope, text) => _._text($scope.a, text))($scope, $temp2.text),
  $for_content__$params = ($scope, $params2) =>
    $for_content__$temp($scope, $params2?.[0]),
  $for_content__$temp = ($scope, $temp) =>
    (($scope, text) => _._text($scope.a, text))($scope, $temp.text),
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

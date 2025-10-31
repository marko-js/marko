// size: 967 (min) 298 (brotli)
const $for_content5__text = _._const(3, ($scope) =>
    _._text($scope[0], $scope[3]),
  ),
  $for_content5__$params = _._const(1, ($scope) =>
    $for_content5__$temp($scope, $scope[1]?.[0]),
  ),
  $for_content5__$temp = _._const(2, ($scope) =>
    $for_content5__text($scope, $scope[2].text),
  ),
  $for_content5 = _._content_branch(" ", " b", 0, $for_content5__$params),
  $for_content4__text = _._const(3, ($scope) => _._text($scope[0], $scope[3])),
  $for_content4__$params = _._const(1, ($scope) =>
    $for_content4__$temp($scope, $scope[1]?.[0]),
  ),
  $for_content4__$temp = _._const(2, ($scope) =>
    $for_content4__text($scope, $scope[2].text),
  ),
  $for_content4 = _._content_branch(" ", " b", 0, $for_content4__$params),
  $for_content3__text = _._const(3, ($scope) => _._text($scope[0], $scope[3])),
  $for_content3__$params = _._const(1, ($scope) =>
    $for_content3__$temp($scope, $scope[1]?.[0]),
  ),
  $for_content3__$temp = _._const(2, ($scope) =>
    $for_content3__text($scope, $scope[2].text),
  ),
  $for_content3 = _._content_branch(" ", " b", 0, $for_content3__$params),
  $for_content2__text = _._const(3, ($scope) => _._text($scope[0], $scope[3])),
  $for_content2__$params = _._const(1, ($scope) =>
    $for_content2__$temp($scope, $scope[1]?.[0]),
  ),
  $for_content2__$temp = _._const(2, ($scope) =>
    $for_content2__text($scope, $scope[2].text),
  ),
  $for_content2 = _._content_branch(" ", " b", 0, $for_content2__$params),
  $for_content__text = _._const(3, ($scope) => _._text($scope[0], $scope[3])),
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__$temp($scope, $scope[1]?.[0]),
  ),
  $for_content__$temp = _._const(2, ($scope) =>
    $for_content__text($scope, $scope[2].text),
  ),
  $for_content = _._content_branch(" ", " b", 0, $for_content__$params),
  $for = _._for_of(0, $for_content),
  $for2 = _._for_of(1, $for_content2),
  $for3 = _._for_of(2, $for_content3),
  $for4 = _._for_of(3, $for_content4),
  $for5 = _._for_of(4, $for_content5),
  $items__script = _._script("a0", ($scope) =>
    _._on($scope[5], "click", function () {
      $items($scope, [...$scope[6].slice(1), $scope[6]?.[0]]);
    }),
  ),
  $items = _._let(6, ($scope) => {
    ($for($scope, [$scope[6], "id"]),
      $for2($scope, [$scope[6], (item) => item.id]),
      $for3($scope, [$scope[6], "id"]),
      $for4($scope, [$scope[6], (item) => item.id]),
      $for5($scope, [$scope[6], void 0]),
      $items__script($scope));
  });
init();

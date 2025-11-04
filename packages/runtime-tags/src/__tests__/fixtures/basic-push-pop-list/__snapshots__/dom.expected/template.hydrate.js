// size: 351 (min) 206 (brotli)
const $for_content__item = _._const(2, ($scope) => _._text($scope.a, $scope.c)),
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__item($scope, $scope.b[0]),
  ),
  $for_content = _._content_branch(" ", " b", 0, $for_content__$params),
  $id__OR__items__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      const nextId = $scope.d + 1;
      ($id($scope, nextId), $items($scope, [...$scope.e, nextId]));
    }),
  ),
  $id__OR__items = _._or(5, $id__OR__items__script),
  $id = _._let(3, $id__OR__items),
  $for = _._for_of(0, $for_content),
  $items__script = _._script("a1", ($scope) =>
    _._on($scope.c, "click", function () {
      $items($scope, $scope.e.slice(0, -1));
    }),
  ),
  $items = _._let(4, ($scope) => {
    ($for($scope, [$scope.e]), $id__OR__items($scope), $items__script($scope));
  });
init();

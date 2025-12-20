// size: 306 (min) 189 (brotli)
const $for_content__$params = ($scope, $params2) =>
    (($scope, item) => _._text($scope.a, item))($scope, $params2[0]),
  $id__OR__items__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      const nextId = $scope.d + 1;
      ($id($scope, nextId), $items($scope, [...$scope.e, nextId]));
    }),
  ),
  $id__OR__items = _._or(5, $id__OR__items__script),
  $id = _._let(3, $id__OR__items),
  $for = _._for_of(0, " ", " b", 0, $for_content__$params),
  $items__script = _._script("a1", ($scope) =>
    _._on($scope.c, "click", function () {
      $items($scope, $scope.e.slice(0, -1));
    }),
  ),
  $items = _._let(4, ($scope) => {
    ($for($scope, [$scope.e]), $id__OR__items($scope), $items__script($scope));
  });
init();

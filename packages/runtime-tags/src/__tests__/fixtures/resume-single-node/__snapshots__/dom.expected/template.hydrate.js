// size: 298 (min) 209 (brotli)
const $for_content__if = _._if(0, "<div>b</div>", "b"),
  $for_content__items_length = _._for_closure(0, ($scope) =>
    $for_content__if($scope, $scope._.f > 1 ? 0 : 1),
  ),
  $for_content__setup = $for_content__items_length,
  $itemId__OR__items__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $items($scope, [...$scope.d, $itemId($scope, $scope.c + 1)]);
    }),
  ),
  $itemId__OR__items = _._or(4, $itemId__OR__items__script),
  $itemId = _._let(2, $itemId__OR__items),
  $for = _._for_of(0, "<div>a</div><!><!>", "b%c", $for_content__setup),
  $items = _._let(3, ($scope) => {
    ($items_length($scope, $scope.d?.length),
      $for($scope, [$scope.d]),
      $itemId__OR__items($scope));
  }),
  $items_length = _._const(5, $for_content__items_length);
init();

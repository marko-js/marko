// size: 212 (min) 155 (brotli)
const $for_content__items__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      (($scope._.b.textContent = $scope._.c.join(", ")), $items($scope._, []));
    }),
  ),
  $for_content__items = _._for_closure(0, $for_content__items__script),
  $for_content__setup = $for_content__items,
  $for = _._for_of(0, "<button>Test</button>", " b", $for_content__setup),
  $items = _._let(2, ($scope) => {
    ($for($scope, [$scope.c]), $for_content__items($scope));
  });
init();

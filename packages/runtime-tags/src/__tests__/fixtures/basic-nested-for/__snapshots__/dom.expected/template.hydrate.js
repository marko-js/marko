// size: 507 (min) 282 (brotli)
const $name = _._const(3, ($scope) => _._text($scope[0], $scope[3])),
  $for_content2__setup = ($scope) => {
    ($scope[0], $for_content2__outer._($scope));
  },
  $for_content2__outer__OR__inner = _._or(3, ($scope) =>
    $name($scope[0], `${$scope._[2]}.${$scope[2]}`),
  ),
  $for_content2__outer = _._for_closure(0, $for_content2__outer__OR__inner),
  $for_content2__inner = _._const(2, $for_content2__outer__OR__inner),
  $for_content2__$params = _._const(1, ($scope) =>
    $for_content2__inner($scope, $scope[1][0]),
  ),
  $for_content2 = _._content_branch(
    "<div> </div>",
    "/D l&",
    $for_content2__setup,
    $for_content2__$params,
  ),
  $for_content__for = _._for_of(0, $for_content2),
  $for_content__items = _._for_closure(1, ($scope) =>
    $for_content__for($scope, [$scope._[2]]),
  ),
  $for_content__setup = $for_content__items,
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__outer($scope, $scope[1][0]),
  ),
  $for_content__outer = _._const(2, $for_content2__outer),
  $for_content = _._content_branch(
    "<!><!><!>",
    "b%c",
    $for_content__setup,
    $for_content__$params,
  ),
  $for = _._for_of(1, $for_content),
  $items__script = _._script("b0", ($scope) =>
    _._on($scope[0], "click", function () {
      $items($scope, [...$scope[2], $scope[2]?.length]);
    }),
  ),
  $items = _._let(2, ($scope) => {
    ($for($scope, [$scope[2]]),
      $for_content__items($scope),
      $items__script($scope));
  });
init();

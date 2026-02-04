// size: 820 (min) 407 (brotli)
const $name__OR__write__script = _._script(
    "a0",
    ($scope) =>
      (_.$signal($scope, 0).onabort = () => {
        $scope.e(`destroyed ${$scope.d}`);
      }),
  ),
  $name__OR__write = _._or(5, ($scope) => {
    (_.$signalReset($scope, 0), $name__OR__write__script($scope));
  }),
  $name = _._const(3, ($scope) => {
    (_._text($scope.a, $scope.d), $name__OR__write($scope));
  }),
  $write$1 = _._const(4, $name__OR__write),
  $for_content2__write = _._closure_get(
    4,
    ($scope) => $write$1($scope.a, $scope._._.e),
    ($scope) => $scope._._,
  ),
  $for_content2__setup = ($scope) => {
    ($for_content2__write($scope),
      $for_content2__outerItem._($scope),
      $scope.a);
  },
  $for_content2__outerItem__OR__middleItem = _._or(3, ($scope) =>
    $name($scope.a, `${$scope._.d}.${$scope.c}`),
  ),
  $for_content2__outerItem = _._for_closure(
    1,
    $for_content2__outerItem__OR__middleItem,
  ),
  $for_content2__middleItem = _._const(
    2,
    $for_content2__outerItem__OR__middleItem,
  ),
  $for_content2__$params = ($scope, $params3) =>
    $for_content2__middleItem($scope, $params3[0]),
  $for_content__for = _._for_of(
    1,
    "<div><div> </div></div>",
    "D/D l&l",
    $for_content2__setup,
    $for_content2__$params,
  ),
  $for_content__items = _._for_closure(2, ($scope) =>
    $for_content__for($scope, [$scope._.d]),
  ),
  $for_content__setup = ($scope) => {
    ($for_content__items._($scope), $for_content__write._($scope), $scope.a);
  },
  $for_content__write = _._for_closure(2, ($scope) =>
    $write$1($scope.a, $scope._.e),
  ),
  $for_content__outerItem = _._const(3, ($scope) => {
    ($name($scope.a, `${$scope.d}`), $for_content2__outerItem($scope));
  }),
  $for_content__$params = ($scope, $params2) =>
    $for_content__outerItem($scope, $params2[0]),
  $for = _._for_of(
    2,
    "<div><div> </div><!></div>",
    "D/D l&%l",
    $for_content__setup,
    $for_content__$params,
  ),
  $items__script = _._script("b1", ($scope) =>
    _._on($scope.a, "click", function () {
      $items($scope, $scope.d?.length ? $scope.d.slice(0, -1) : [1, 2, 3]);
    }),
  ),
  $items = _._let(3, ($scope) => {
    ($for($scope, [$scope.d]),
      $for_content__items($scope),
      $items__script($scope));
  });
(_._resume("b0", function ($scope) {
  return function (msg) {
    $scope.b.innerHTML += "\n" + msg;
  };
}),
  init());

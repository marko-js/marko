// size: 534 (min) 309 (brotli)
const $name__OR__write__script = _._script("a0", ($scope) => {
    ($scope.e(`mounted ${$scope.d}`),
      (_.$signal($scope, 0).onabort = () => {
        $scope.e(`destroyed ${$scope.d}`);
      }));
  }),
  $name__OR__write = _._or(5, ($scope) => {
    (_.$signalReset($scope, 0), $name__OR__write__script($scope));
  }),
  $name = _._const(3, ($scope) => {
    (_._text($scope.a, $scope.d), $name__OR__write($scope));
  }),
  $write$1 = _._const(4, $name__OR__write),
  $for_content__write = _._for_closure(2, ($scope) =>
    $write$1($scope.a, $scope._.e),
  ),
  $for_content__setup = ($scope) => {
    ($for_content__write._($scope), $scope.a);
  },
  $for_content__$params = ($scope, $params2) =>
    (($scope, item) => $name($scope.a, item))($scope, $params2[0]),
  $for = _._for_of(
    2,
    "<div> </div>",
    "/D l&",
    $for_content__setup,
    $for_content__$params,
  ),
  $items__script = _._script("b1", ($scope) =>
    _._on($scope.a, "click", function () {
      $items($scope, $scope.d?.length ? $scope.d.slice(0, -1) : [1, 2, 3]);
    }),
  ),
  $items = _._let(3, ($scope) => {
    ($for($scope, [$scope.d]), $items__script($scope));
  });
(_._resume("b0", function ($scope) {
  return function (msg) {
    $scope.b.innerHTML += "\n" + msg;
  };
}),
  init());

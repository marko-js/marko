// size: 596 (min) 343 (brotli)
const $name__OR__write__script = _._script("a0", ($scope) => {
    ($scope.g(`mounted ${$scope.f}`),
      (_.$signal($scope, 0).onabort = () => {
        $scope.g(`destroyed ${$scope.f}`);
      }));
  }),
  $name__OR__write = _._or(7, ($scope) => {
    (_.$signalReset($scope, 0), $name__OR__write__script($scope));
  }),
  $name = _._const(5, ($scope) => {
    (_._text($scope.a, $scope.f),
      _._text($scope.b, $scope.f),
      _._text($scope.c, $scope.f),
      $name__OR__write($scope));
  }),
  $write$1 = _._const(6, $name__OR__write),
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
    "<div> </div><span> </span><p> </p>",
    "/D lD lD l&",
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

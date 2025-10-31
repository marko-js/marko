// size: 662 (min) 357 (brotli)
const $name__OR__write__script = _._script("a0", ($scope) => {
    ($scope[6](`mounted ${$scope[5]}`),
      (_.$signal($scope, 0).onabort = () => {
        $scope[6](`destroyed ${$scope[5]}`);
      }));
  }),
  $name__OR__write = _._or(7, ($scope) => {
    (_.$signalReset($scope, 0), $name__OR__write__script($scope));
  }),
  $name = _._const(5, ($scope) => {
    (_._text($scope[0], $scope[5]),
      _._text($scope[1], $scope[5]),
      _._text($scope[2], $scope[5]),
      $name__OR__write($scope));
  }),
  $write$1 = _._const(6, $name__OR__write),
  $for_content__setup = ($scope) => {
    ($scope[0], $for_content__write._($scope));
  },
  $for_content__write = _._for_closure(2, ($scope) =>
    $write$1($scope[0], $scope._[4]),
  ),
  $for_content__item = _._const(2, ($scope) => $name($scope[0], $scope[2])),
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__item($scope, $scope[1][0]),
  ),
  $for_content = _._content_branch(
    "<div> </div><span> </span><p> </p>",
    "/D lD lD l&",
    $for_content__setup,
    $for_content__$params,
  ),
  $for = _._for_of(2, $for_content),
  $items__script = _._script("b1", ($scope) =>
    _._on($scope[0], "click", function () {
      $items($scope, $scope[3]?.length ? $scope[3].slice(0, -1) : [1, 2, 3]);
    }),
  ),
  $items = _._let(3, ($scope) => {
    ($for($scope, [$scope[3]]), $items__script($scope));
  });
(_._resume("b0", function ($scope) {
  return function (msg) {
    $scope[1].innerHTML += "\n" + msg;
  };
}),
  init());

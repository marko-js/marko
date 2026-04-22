// size: 547 (min) 324 (brotli)
const $input_name__OR__input_write__script = _._script(`a0`, ($scope) => {
    ($scope.e(`mounted ${$scope.d}`),
      (_.$signal($scope, 0).onabort = () => {
        $scope.e(`destroyed ${$scope.d}`);
      }));
  }),
  $input_name__OR__input_write = _._or(5, ($scope) => {
    (_.$signalReset($scope, 0), $input_name__OR__input_write__script($scope));
  }),
  $name = _._const(3, ($scope) => {
    (_._text($scope.a, $scope.d), $input_name__OR__input_write($scope));
  }),
  $write$1 = _._const(4, $input_name__OR__input_write),
  $for_content__write = _._for_closure(2, ($scope) =>
    $write$1($scope.a, $scope._.e),
  ),
  $for_content__setup = ($scope) => {
    ($for_content__write._($scope), $scope.a);
  },
  $for_content__item = ($scope, item) => $name($scope.a, item),
  $for = _._for_of(
    2,
    `<div> </div>`,
    ((_w0) => `/${_w0}&`)(`D l`),
    $for_content__setup,
    ($scope, $params2) => $for_content__item($scope, $params2[0]),
  ),
  $items__script = _._script(`b1`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $items($scope, $scope.d?.length ? $scope.d.slice(0, -1) : [1, 2, 3]);
    }),
  ),
  $items = _._let(3, ($scope) => {
    ($for($scope, [$scope.d]), $items__script($scope));
  });
function $write($scope) {
  return function (msg) {
    $scope.b.innerHTML +=
      `
` + msg;
  };
}
(_._resume(`b0`, $write), init());

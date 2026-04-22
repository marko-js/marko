// size: 393 (min) 240 (brotli)
const $input__script = _._script(`a0`, ($scope) => {
    ($scope.b.write(`mounted`),
      (_.$signal($scope, 0).onabort = () => {
        $scope.b.write(`destroyed`);
      }));
  }),
  $input = _._const(1, ($scope) => {
    (_.$signalReset($scope, 0), $input__script($scope));
  }),
  $if = _._if(2, `<div>child</div>`, ((_w0) => `/${_w0}&`)(`b`), ($scope) => {
    ($scope.a, $input($scope.a, { write: $write($scope) }));
  }),
  $show__script = _._script(`b1`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $show($scope, !$scope.d);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($if($scope, +!$scope.d), $show__script($scope));
  });
function $write($scope) {
  return function (state) {
    $scope._.b.innerHTML = state;
  };
}
(_._resume(`b0`, $write), init());

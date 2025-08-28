// size: 301 (min) 176 (brotli)
const $x_effect = _$.effect("a1", ($scope, { 2: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _$.state(2, ($scope, x) => {
    (_$.data($scope[1], x), _$.tagVarSignal($scope, x), $x_effect($scope));
  });
(_$.register("a0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
}),
  _$.registerBoundSignal("b0", ($scope) => {}),
  _$.effect("b1", ($scope) =>
    _$.on($scope[2], "click", function () {
      _$.tagVarSignalChange($scope.d0, 0);
    }),
  ),
  init());

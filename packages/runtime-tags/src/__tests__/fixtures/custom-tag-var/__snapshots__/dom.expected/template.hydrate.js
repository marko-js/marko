// size: 201 (min) 144 (brotli)
const $x_effect = _$.effect("a0", ($scope, { 2: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _$.state(2, ($scope, x) => {
    (_$.data($scope[1], x), _$.tagVarSignal($scope, x), $x_effect($scope));
  });
(_$.registerBoundSignal(
  "b0",
  _$.value(3, ($scope, data) => _$.data($scope[2], data)),
),
  init());

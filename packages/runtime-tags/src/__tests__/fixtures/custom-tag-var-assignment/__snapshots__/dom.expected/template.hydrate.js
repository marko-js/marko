// size: 431 (min) 201 (brotli)
const $x_effect = _$.effect("a1", ($scope, { 2: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _$.state(2, ($scope, x) => {
    (_$.data($scope[1], x), _$.tagVarSignal($scope, x), $x_effect($scope));
  });
_$.register("a0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
});
const $count_effect = _$.effect("b0", ($scope, { 5: count }) =>
  _$.on($scope[2], "click", function () {
    _$.tagVarSignalChange($scope[0], ++count);
  }),
);
(_$.registerBoundSignal(
  "b1",
  _$.value(5, ($scope, count) => {
    (_$.data($scope[3], count), $count_effect($scope));
  }),
),
  _$.effect("b2", ($scope) =>
    _$.on($scope[4], "click", function () {
      _$.tagVarSignalChange($scope[0], 0);
    }),
  ),
  init());

// size: 457 (min) 253 (brotli)
const $x_effect = _$.effect("a1", ($scope, { 2: x }) =>
    _$.on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _$.state(2, ($scope, x) => {
    (_$.data($scope[1], x), _$.tagVarSignal($scope, x), $x_effect($scope));
  });
function $setup($scope) {
  (_$.setTagVarChange($scope, $valueChange($scope)), $x($scope, 1));
}
function $valueChange($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
}
_$.register("a0", $valueChange);
var Counter = _$.createTemplate(
  "a",
  "<button class=inc> </button>",
  " D l",
  $setup,
);
(_$.registerBoundSignal("b1", ($scope) => {}),
  _$.effect("b2", ($scope) =>
    _$.on($scope[2], "click", function () {
      _$.tagVarSignalChange($scope.d0, 0);
    }),
  ),
  _$.register("b0", function () {
    return Counter;
  }),
  init());

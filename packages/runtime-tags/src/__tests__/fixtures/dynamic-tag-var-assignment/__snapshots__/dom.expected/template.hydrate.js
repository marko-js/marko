// size: 284 (min) 179 (brotli)
const $x__script = _._script("a1", ($scope, { 2: x }) =>
    _._on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(2, ($scope, x) => {
    (_._text($scope[1], x), _._return($scope, x), $x__script($scope));
  });
(_._resume("a0", function ($scope) {
  return (_new_x) => {
    $x($scope, _new_x);
  };
}),
  _._var_resume("b0", ($scope) => {}),
  _._script("b1", ($scope) =>
    _._on($scope[2], "click", function () {
      _._var_change($scope.d0, 0);
    }),
  ),
  init());

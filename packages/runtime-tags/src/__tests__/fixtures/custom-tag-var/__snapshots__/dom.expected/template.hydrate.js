// size: 192 (min) 146 (brotli)
const $x__script = _._script("a0", ($scope, { 2: x }) =>
    _._on($scope[0], "click", function () {
      $x($scope, ++x);
    }),
  ),
  $x = _._let(2, ($scope, x) => {
    (_._text($scope[1], x), _._return($scope, x), $x__script($scope));
  });
(_._var_resume(
  "b0",
  _._const(3, ($scope, data) => _._text($scope[2], data)),
),
  init());

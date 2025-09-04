// size: 182 (min) 133 (brotli)
const $x__OR__y__script = _._script("a0", ($scope, { 3: x, 4: y }) =>
    _._on($scope[0], "click", () => $x($scope, (x = $y($scope, (y = x + y))))),
  ),
  $x__OR__y = _._or(5, $x__OR__y__script),
  $x = _._let(3, ($scope, x) => {
    (_._text($scope[1], x), $x__OR__y($scope));
  }),
  $y = _._let(4, ($scope, y) => {
    (_._text($scope[2], y), $x__OR__y($scope));
  });
init();

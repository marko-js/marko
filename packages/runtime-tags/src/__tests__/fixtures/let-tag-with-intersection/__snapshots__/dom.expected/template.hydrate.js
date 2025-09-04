// size: 303 (min) 182 (brotli)
const $a = _._const(9, ($scope, a) => _._text($scope[4], a)),
  $y__OR__z = _._or(8, ($scope) => {
    let { 6: y, 7: z } = $scope;
    $a($scope, y + z);
  }),
  $y = _._const(6, ($scope, y) => {
    (_._text($scope[2], y), $y__OR__z($scope));
  }),
  $z = _._const(7, ($scope, z) => {
    (_._text($scope[3], z), $y__OR__z($scope));
  }),
  $x__script = _._script("a0", ($scope, { 5: x }) =>
    _._on($scope[0], "click", () => ($x($scope, ++x), x - 1)),
  ),
  $x = _._let(5, ($scope, x) => {
    (_._text($scope[1], x),
      $y($scope, x + 1),
      $z($scope, x + 2),
      $x__script($scope));
  });
init();

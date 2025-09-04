// size: 262 (min) 176 (brotli)
const $y__script = _._script("a1", ($scope, { 6: y }) =>
    _._on($scope[0], "click", function () {
      $y($scope, ++y);
    }),
  ),
  $y = _._let(6, ($scope, y) => {
    (_._text($scope[2], y), $y__script($scope));
  }),
  $x__OR__handler = _._or(5, ($scope) => {
    let { 3: x, 4: handler } = $scope;
    $y($scope, x, handler);
  }),
  $x = _._let(3, ($scope, x) => {
    (_._text($scope[1], x), $x__OR__handler($scope));
  });
(_._resume("a0", function ($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}),
  init());

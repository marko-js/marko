// size: 337 (min) 199 (brotli)
const $y__script = _._script("a1", ($scope, { 7: y }) =>
    _._on($scope[0], "click", function () {
      $y($scope, ++y);
    }),
  ),
  $y = _._let(7, ($scope, y) => {
    (_._text($scope[2], y), $y__script($scope));
  }),
  $x__OR__yChange = _._or(6, ($scope) => {
    let { 4: x, 5: yChange } = $scope;
    $y($scope, x, yChange);
  }),
  $x = _._let(4, ($scope, x) => {
    (_._text($scope[1], x), $x__OR__yChange($scope));
  }),
  $yChange2 = _._let(5, $x__OR__yChange);
(_._script("a2", ($scope) =>
  _._on($scope[3], "click", function () {
    $yChange2($scope, null);
  }),
),
  _._resume("a0", function ($scope) {
    return function (newValue) {
      $x($scope, newValue + 1);
    };
  }),
  init());

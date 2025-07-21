// size: 346 (min) 198 (brotli)
const $y_effect = _$.effect("a1", ($scope, { 7: y }) =>
    _$.on($scope[0], "click", function () {
      $y($scope, ++y);
    }),
  ),
  $y = _$.state(7, ($scope, y) => {
    (_$.data($scope[2], y), $y_effect($scope));
  }),
  $expr_x_yChange = _$.intersection(6, ($scope) => {
    const { 4: x, 5: yChange } = $scope;
    $y($scope, x, yChange);
  }),
  $x = _$.state(4, ($scope, x) => {
    (_$.data($scope[1], x), $expr_x_yChange($scope));
  }),
  $yChange2 = _$.state(5, $expr_x_yChange);
(_$.effect("a2", ($scope) =>
  _$.on($scope[3], "click", function () {
    $yChange2($scope, null);
  }),
),
  _$.register("a0", function ($scope) {
    return function (newValue) {
      $x($scope, newValue + 1);
    };
  }),
  init());

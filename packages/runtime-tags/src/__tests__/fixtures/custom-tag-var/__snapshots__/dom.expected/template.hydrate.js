// size: 188 (min) 141 (brotli)
const $x__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $x($scope, $scope[2] + 1);
    }),
  ),
  $x = _._let(2, ($scope) => {
    (_._text($scope[1], $scope[2]),
      _._return($scope, $scope[2]),
      $x__script($scope));
  });
(_._var_resume(
  "b0",
  _._const(3, ($scope) => _._text($scope[2], $scope[3])),
),
  init());

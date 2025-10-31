// size: 192 (min) 154 (brotli)
const $myObj = _._const(4, ($scope) =>
    _._text($scope[0], JSON.stringify($scope[4])),
  ),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $x($scope, $scope[3] + 1);
    }),
  ),
  $x = _._let(3, ($scope) => {
    (_._text($scope[2], $scope[3]),
      $myObj($scope, { foo: 1, bar: $scope[3] + 1 }),
      $x__script($scope));
  });
init();

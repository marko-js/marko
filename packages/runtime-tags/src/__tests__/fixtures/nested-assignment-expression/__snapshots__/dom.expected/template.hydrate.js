// size: 206 (min) 160 (brotli)
const $clickCount__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      const last = $lastCount($scope, $clickCount($scope, $scope[4] + 1) - 1);
      $lastCount2($scope, last);
    }),
  ),
  $clickCount = _._let(4, ($scope) => {
    (_._text($scope[1], $scope[4]), $clickCount__script($scope));
  }),
  $lastCount = _._let(5, ($scope) => _._text($scope[2], $scope[5])),
  $lastCount2 = _._let(6, ($scope) => _._text($scope[3], $scope[6]));
init();

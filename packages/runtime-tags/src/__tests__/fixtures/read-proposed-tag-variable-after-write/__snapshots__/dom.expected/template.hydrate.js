// size: 153 (min) 115 (brotli)
const $clickCount__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      (($scope[2].innerHTML = $clickCount($scope, $scope[4] + 1) - 1),
        ($scope[3].innerHTML = $scope[4]));
    }),
  ),
  $clickCount = _._let(4, ($scope) => {
    (_._text($scope[1], $scope[4]), $clickCount__script($scope));
  });
init();

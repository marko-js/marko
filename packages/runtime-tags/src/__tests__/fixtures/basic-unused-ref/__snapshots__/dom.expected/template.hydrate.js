// size: 116 (min) 104 (brotli)
const $clickCount__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $clickCount($scope, $scope[2] + 1);
    }),
  ),
  $clickCount = _._let(2, ($scope) => {
    (_._text($scope[1], $scope[2]), $clickCount__script($scope));
  });
init();

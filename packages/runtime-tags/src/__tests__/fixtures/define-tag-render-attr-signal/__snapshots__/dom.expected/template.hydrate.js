// size: 165 (min) 114 (brotli)
const $MyTag_content__number = _._const(3, ($scope) =>
    _._text($scope[0], $scope[3]),
  ),
  $x__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $x($scope, $scope[3] + 1);
    }),
  ),
  $x = _._let(3, ($scope) => {
    ($MyTag_content__number($scope[0], $scope[3]),
      _._text($scope[2], $scope[3]),
      $x__script($scope));
  });
init();

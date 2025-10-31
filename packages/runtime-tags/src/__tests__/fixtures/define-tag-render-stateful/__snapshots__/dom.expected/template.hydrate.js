// size: 165 (min) 117 (brotli)
const $MyTag_content__count = _._const(5, ($scope) =>
    _._text($scope[1], $scope[5]),
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[3] + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    (_._text($scope[1], $scope[3]),
      $MyTag_content__count($scope[2], $scope[3]),
      $count__script($scope));
  });
init();

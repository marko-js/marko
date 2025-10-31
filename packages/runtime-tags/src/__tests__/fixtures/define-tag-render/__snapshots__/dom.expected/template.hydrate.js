// size: 135 (min) 104 (brotli)
const $MyTag_content__y__script = _._script("a0", ($scope) =>
    _._on($scope[2], "click", function () {
      $MyTag_content__y($scope, $scope[7] + 1);
    }),
  ),
  $MyTag_content__y = _._let(7, ($scope) => {
    (_._text($scope[1], $scope[7]),
      _._text($scope[3], $scope[7]),
      $MyTag_content__y__script($scope));
  });
init();

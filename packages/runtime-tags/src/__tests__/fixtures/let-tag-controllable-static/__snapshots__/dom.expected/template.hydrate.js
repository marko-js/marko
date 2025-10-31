// size: 228 (min) 159 (brotli)
const $y__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $y($scope, $scope[4] + 1);
    }),
  ),
  $y = _._let(4, ($scope) => {
    (_._text($scope[2], $scope[4]), $y__script($scope));
  }),
  $x = _._let(3, ($scope) => {
    (_._text($scope[1], $scope[3]),
      $y($scope, $scope[3], $valueChange($scope)));
  });
function $valueChange($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}
(_._resume("a0", $valueChange), init());

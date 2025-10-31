// size: 380 (min) 212 (brotli)
const $onClick__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", $scope[5]),
  ),
  $onClick$1 = _._const(5, $onClick__script),
  $text = _._const(7, ($scope) => {
    (_._text($scope[1], $scope[7]), $textAlias($scope, $scope[7]));
  }),
  $textAlias = ($scope) => {
    _._text($scope[2], $scope[7]);
  },
  $value2 = _._const(6, ($scope) => $text($scope, $scope[6].text)),
  $clickCount = _._let(2, ($scope) => {
    ($value2($scope[0], { text: $scope[2] }),
      $onClick$1($scope[0], $onClick($scope)),
      $text($scope[1], $scope[2]),
      $onClick$1($scope[1], $onClick2($scope)));
  });
function $onClick2($scope) {
  return function () {
    $clickCount($scope, $scope[2] + 1);
  };
}
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope[2] + 1);
  };
}
(_._resume("b1", $onClick2), _._resume("b0", $onClick), init());

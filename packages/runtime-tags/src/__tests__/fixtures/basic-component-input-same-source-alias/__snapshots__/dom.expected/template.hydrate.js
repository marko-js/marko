// size: 252 (min) 178 (brotli)
const $onClick__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", $scope[5]),
  ),
  $onClick$1 = _._const(5, $onClick__script),
  $text = _._const(6, ($scope) => {
    (_._text($scope[1], $scope[6]), $textAlias($scope, $scope[6]));
  }),
  $textAlias = ($scope) => {
    _._text($scope[2], $scope[6]);
  },
  $clickCount = _._let(1, ($scope) => {
    ($text($scope[0], $scope[1]), $onClick$1($scope[0], $onClick($scope)));
  });
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope[1] + 1);
  };
}
(_._resume("b0", $onClick), init());

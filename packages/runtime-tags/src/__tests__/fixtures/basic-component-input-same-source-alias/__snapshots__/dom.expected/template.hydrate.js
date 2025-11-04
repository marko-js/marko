// size: 241 (min) 163 (brotli)
const $onClick__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", $scope.f),
  ),
  $onClick$1 = _._const(5, $onClick__script),
  $text = _._const(6, ($scope) => {
    (_._text($scope.b, $scope.g), $textAlias($scope, $scope.g));
  }),
  $textAlias = ($scope) => {
    _._text($scope.c, $scope.g);
  },
  $clickCount = _._let(1, ($scope) => {
    ($text($scope.a, $scope.b), $onClick$1($scope.a, $onClick($scope)));
  });
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope.b + 1);
  };
}
(_._resume("b0", $onClick), init());

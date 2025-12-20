// size: 342 (min) 191 (brotli)
const $onClick__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", $scope.f),
  ),
  $onClick$1 = _._const(5, $onClick__script),
  $text = ($scope, text) => {
    (_._text($scope.b, text), $textAlias($scope, text));
  },
  $textAlias = ($scope, text) => _._text($scope.c, text),
  $clickCount = _._let(2, ($scope) => {
    ((($scope, $value) => {
      $text($scope, $value.text);
    })($scope.a, { text: $scope.c }),
      $onClick$1($scope.a, $onClick($scope)),
      $text($scope.b, $scope.c),
      $onClick$1($scope.b, $onClick2($scope)));
  });
function $onClick2($scope) {
  return function () {
    $clickCount($scope, $scope.c + 1);
  };
}
function $onClick($scope) {
  return function () {
    $clickCount($scope, $scope.c + 1);
  };
}
(_._resume("b1", $onClick2), _._resume("b0", $onClick), init());

// size: 192 (min) 122 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.d + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d),
      _._text(
        $scope.c,
        `${_._to_text($scope.d)} + ${_._to_text($scope.d)} = ${_._to_text($scope.d + $scope.d)}`,
      ),
      $count__script($scope));
  });
init();

// size: 181 (min) 145 (brotli)
const $user = _._let(3, ($scope) => $user_id($scope, $scope.d?.id)),
  $index__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $index($scope, $scope.c + 1);
    }),
  ),
  $index = _._let(2, ($scope) => {
    ($user($scope, -1 !== $scope.c && { id: $scope.c }),
      $index__script($scope));
  }),
  $user_id = _._const(4, ($scope) => _._text($scope.a, $scope.e));
init();

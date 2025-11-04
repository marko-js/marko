// size: 292 (min) 207 (brotli)
const names = ["Dylan", "Michael", "Ryan", "Luke"],
  $index__script = _._script("a0", ($scope) =>
    _._on($scope.c, "click", function () {
      ($index($scope, $scope.d === names.length - 1 ? -1 : $scope.d + 1),
        $user(
          $scope,
          -1 !== $scope.d && { id: $scope.d, name: names[$scope.d] },
        ));
    }),
  ),
  $index = _._let(3, $index__script),
  $user = _._let(4, ($scope) => {
    ($user_id($scope, $scope.e?.id), $user_name($scope, $scope.e?.name));
  }),
  $user_id = _._const(5, ($scope) => _._text($scope.a, $scope.f)),
  $user_name = _._const(6, ($scope) => _._text($scope.b, $scope.g));
init();

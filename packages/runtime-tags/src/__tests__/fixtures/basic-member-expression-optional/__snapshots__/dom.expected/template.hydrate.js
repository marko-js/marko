// size: 304 (min) 212 (brotli)
const names = ["Dylan", "Michael", "Ryan", "Luke"],
  $index__script = _._script("a0", ($scope) =>
    _._on($scope[2], "click", function () {
      ($index($scope, $scope[3] === names.length - 1 ? -1 : $scope[3] + 1),
        $user(
          $scope,
          -1 !== $scope[3] && { id: $scope[3], name: names[$scope[3]] },
        ));
    }),
  ),
  $index = _._let(3, $index__script),
  $user = _._let(4, ($scope) => {
    ($user_id($scope, $scope[4]?.id), $user_name($scope, $scope[4]?.name));
  }),
  $user_id = _._const(5, ($scope) => _._text($scope[0], $scope[5])),
  $user_name = _._const(6, ($scope) => _._text($scope[1], $scope[6]));
init();

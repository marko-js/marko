// size: 188 (min) 151 (brotli)
const $user = _._let(3, ($scope) => $user_id($scope, $scope[3]?.id)),
  $index__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $index($scope, $scope[2] + 1);
    }),
  ),
  $index = _._let(2, ($scope) => {
    ($user($scope, -1 !== $scope[2] && { id: $scope[2] }),
      $index__script($scope));
  }),
  $user_id = _._const(4, ($scope) => _._text($scope[0], $scope[4]));
init();

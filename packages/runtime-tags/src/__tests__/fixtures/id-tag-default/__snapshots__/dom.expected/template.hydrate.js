// size: 284 (min) 172 (brotli)
const $sometimesBar = _._const(8, ($scope) =>
    _._attr($scope[2], "id", $scope[8]),
  ),
  $bar__OR__baz__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      ($bar($scope, $scope[4] ? null : "bar"),
        $baz($scope, $scope[5] ? null : "baz"));
    }),
  ),
  $bar__OR__baz = _._or(6, $bar__OR__baz__script),
  $bar = _._let(4, ($scope) => {
    ($sometimesBar($scope, $scope[4] || _._id($scope)), $bar__OR__baz($scope));
  }),
  $sometimesBaz = _._const(9, ($scope) => _._attr($scope[3], "id", $scope[9])),
  $baz = _._let(5, ($scope) => {
    ($sometimesBaz($scope, $scope[5] || _._id($scope)), $bar__OR__baz($scope));
  });
init();

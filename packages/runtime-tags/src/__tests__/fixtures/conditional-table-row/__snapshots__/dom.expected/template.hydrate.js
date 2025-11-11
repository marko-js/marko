// size: 145 (min) 124 (brotli)
const $if = _._if(0, "<tr><td>Hi</td></tr>", "b"),
  $show__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $show($scope, !$scope.c);
    }),
  ),
  $show = _._let(2, ($scope) => {
    ($if($scope, $scope.c ? 0 : 1), $show__script($scope));
  });
init();

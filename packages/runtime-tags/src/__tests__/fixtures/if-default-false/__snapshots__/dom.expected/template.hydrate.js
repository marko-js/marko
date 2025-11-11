// size: 127 (min) 114 (brotli)
const $if = _._if(1, "hi", "b"),
  $show__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $show($scope, !$scope.c);
    }),
  ),
  $show = _._let(2, ($scope) => {
    ($if($scope, $scope.c ? 0 : 1), $show__script($scope));
  });
init();

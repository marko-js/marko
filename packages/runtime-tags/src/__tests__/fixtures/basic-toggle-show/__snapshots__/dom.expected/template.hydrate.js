// size: 154 (min) 121 (brotli)
const $if_content = _._content_branch("Hello!", "b"),
  $if = _._if(0, $if_content),
  $show__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $show($scope, !$scope.c);
    }),
  ),
  $show = _._let(2, ($scope) => {
    ($if($scope, $scope.c ? 0 : 1), $show__script($scope));
  });
init();

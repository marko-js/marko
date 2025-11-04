// size: 150 (min) 128 (brotli)
const $if_content = _._content_branch("hi", "b"),
  $if = _._if(1, $if_content),
  $show__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $show($scope, !$scope.c);
    }),
  ),
  $show = _._let(2, ($scope) => {
    ($if($scope, $scope.c ? 0 : 1), $show__script($scope));
  });
init();

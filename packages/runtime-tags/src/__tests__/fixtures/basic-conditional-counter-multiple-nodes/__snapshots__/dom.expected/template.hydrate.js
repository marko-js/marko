// size: 282 (min) 175 (brotli)
const $if_content__count = _._if_closure(2, 0, ($scope) =>
    _._text($scope.a, $scope._.e),
  ),
  $if_content__setup = $if_content__count,
  $if = _._if(2, "The count is <!>", "b%b", $if_content__setup),
  $show__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $show($scope, !$scope.d);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($if($scope, $scope.d ? 0 : 1), $show__script($scope));
  }),
  $count__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.e + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($if_content__count($scope), $count__script($scope));
  });
init();

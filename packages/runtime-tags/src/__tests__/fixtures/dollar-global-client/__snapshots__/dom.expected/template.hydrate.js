// size: 303 (min) 175 (brotli)
const $if_content2__setup = ($scope) => {
    _._text($scope.a, $scope.$.x);
  },
  $if_content2 = _._content_branch(
    "<span class=hidden> </span>",
    "D l",
    $if_content2__setup,
  ),
  $if_content__setup = ($scope) => {
    _._text($scope.a, $scope.$.x);
  },
  $if_content = _._content_branch("<span> </span>", "D l", $if_content__setup),
  $if = _._if(0, $if_content),
  $if2 = _._if(1, $if_content2),
  $show__script = _._script("a0", ($scope) =>
    _._on($scope.c, "click", function () {
      $show($scope, !$scope.d);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($if($scope, $scope.d ? 0 : 1),
      $if2($scope, $scope.d ? 1 : 0),
      $show__script($scope));
  });
init();

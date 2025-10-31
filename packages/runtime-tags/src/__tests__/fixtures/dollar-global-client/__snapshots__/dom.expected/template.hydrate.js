// size: 321 (min) 180 (brotli)
const $if_content2__setup = ($scope) => {
    _._text($scope[0], $scope.$global.x);
  },
  $if_content2 = _._content_branch(
    "<span class=hidden> </span>",
    "D l",
    $if_content2__setup,
  ),
  $if_content__setup = ($scope) => {
    _._text($scope[0], $scope.$global.x);
  },
  $if_content = _._content_branch("<span> </span>", "D l", $if_content__setup),
  $if = _._if(0, $if_content),
  $if2 = _._if(1, $if_content2),
  $show__script = _._script("a0", ($scope) =>
    _._on($scope[2], "click", function () {
      $show($scope, !$scope[3]);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($if($scope, $scope[3] ? 0 : 1),
      $if2($scope, $scope[3] ? 1 : 0),
      $show__script($scope));
  });
init();

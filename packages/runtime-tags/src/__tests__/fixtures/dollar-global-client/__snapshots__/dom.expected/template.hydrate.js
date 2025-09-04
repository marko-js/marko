// size: 326 (min) 190 (brotli)
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
  $show__script = _._script("a0", ($scope, { 3: show }) =>
    _._on($scope[2], "click", function () {
      $show($scope, (show = !show));
    }),
  ),
  $show = _._let(3, ($scope, show) => {
    ($if($scope, show ? 0 : 1),
      $if2($scope, show ? 1 : 0),
      $show__script($scope));
  });
init();

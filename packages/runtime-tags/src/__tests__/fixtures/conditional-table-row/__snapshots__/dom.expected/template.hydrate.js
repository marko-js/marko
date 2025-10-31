// size: 171 (min) 154 (brotli)
const $if_content = _._content_branch("<tr><td>Hi</td></tr>", "b"),
  $if = _._if(0, $if_content),
  $show__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $show($scope, !$scope[2]);
    }),
  ),
  $show = _._let(2, ($scope) => {
    ($if($scope, $scope[2] ? 0 : 1), $show__script($scope));
  });
init();

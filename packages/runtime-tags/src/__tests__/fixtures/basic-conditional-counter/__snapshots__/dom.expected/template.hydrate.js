// size: 310 (min) 195 (brotli)
const $if_content__count = _._if_closure(2, 0, ($scope) =>
    _._text($scope[0], $scope._[4]),
  ),
  $if_content__setup = $if_content__count,
  $if_content = _._content_branch("<span> </span>", "D l", $if_content__setup),
  $if = _._if(2, $if_content),
  $show__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $show($scope, !$scope[3]);
    }),
  ),
  $show = _._let(3, ($scope) => {
    ($if($scope, $scope[3] ? 0 : 1), $show__script($scope));
  }),
  $count__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[4] + 1);
    }),
  ),
  $count = _._let(4, ($scope) => {
    ($if_content__count($scope), $count__script($scope));
  });
init();

// size: 238 (min) 166 (brotli)
const $if_content__message = _._if_closure(1, 0, ($scope) =>
    _._text($scope.a, $scope._.d),
  ),
  $if_content__setup = $if_content__message,
  $if_content = _._content_branch("<span> </span>", "D l", $if_content__setup),
  $if = _._if(1, $if_content),
  $show__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      ($message($scope, "bye"), $show($scope, !$scope.c));
    }),
  ),
  $show = _._let(2, ($scope) => {
    ($if($scope, $scope.c ? 0 : 1), $show__script($scope));
  }),
  $message = _._let(3, $if_content__message);
init();

// size: 237 (min) 170 (brotli)
const $if_content__text = _._if_closure(0, 0, ($scope) =>
    _._text($scope.a, $scope._.c),
  ),
  $if_content__setup = $if_content__text,
  $if = _._if(0, "<div> </div>", "D l", $if_content__setup),
  $hide__OR__text_length = _._or(4, ($scope) =>
    $if($scope, !$scope.b && $scope.d ? 0 : 1),
  ),
  $hide = _._let(1, $hide__OR__text_length),
  $text = _._let(2, ($scope) => {
    ($text_length($scope, $scope.c?.length), $if_content__text($scope));
  });
_._script("a0", ($scope) => {
  ($text($scope, $scope.f), $hide($scope, !1));
});
const $text_length = _._const(3, $hide__OR__text_length);
init();

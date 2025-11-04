// size: 161 (min) 134 (brotli)
const $if_content__setup = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $hide($scope._, !0);
    }),
  ),
  $if_content = _._content_branch(
    "<button></button>",
    " b",
    $if_content__setup,
  ),
  $if = _._if(0, $if_content),
  $hide = _._let(1, ($scope) => $if($scope, $scope.b ? 1 : 0));
init();

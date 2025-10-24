// size: 164 (min) 130 (brotli)
const $if_content__setup = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $hide($scope._, !0);
    }),
  ),
  $if_content = _._content_branch(
    "<button></button>",
    " b",
    $if_content__setup,
  ),
  $if = _._if(0, $if_content),
  $hide = _._let(1, ($scope, hide) => $if($scope, hide ? 1 : 0));
init();

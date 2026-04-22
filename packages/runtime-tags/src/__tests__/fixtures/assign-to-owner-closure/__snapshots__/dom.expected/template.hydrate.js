// size: 137 (min) 112 (brotli)
const $if_content__setup = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $hide($scope._, !0);
    }),
  ),
  $if = _._if(0, `<button></button>`, ` b`, $if_content__setup),
  $hide = _._let(1, ($scope) => $if($scope, +!!$scope.b));
init();

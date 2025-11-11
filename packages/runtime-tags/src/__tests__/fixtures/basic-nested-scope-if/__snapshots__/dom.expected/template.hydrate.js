// size: 319 (min) 207 (brotli)
const $else_content__clickCount = _._if_closure(0, 1, ($scope) =>
    _._text($scope.a, $scope._.b),
  ),
  $else_content__setup = $else_content__clickCount,
  $if_content__clickCount__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $clickCount($scope._, $scope._.b + 1);
    }),
  ),
  $if_content__clickCount = _._if_closure(0, 0, ($scope) => {
    (_._text($scope.b, $scope._.b), $if_content__clickCount__script($scope));
  }),
  $if_content__setup = $if_content__clickCount,
  $if = _._if(
    0,
    "<button> </button>",
    " D l",
    $if_content__setup,
    "<span>The button was clicked <!> times.</span>",
    "Db%l",
    $else_content__setup,
  ),
  $clickCount = _._let(1, ($scope) => {
    ($if($scope, $scope.b < 3 ? 0 : 1),
      $if_content__clickCount($scope),
      $else_content__clickCount($scope));
  });
init();

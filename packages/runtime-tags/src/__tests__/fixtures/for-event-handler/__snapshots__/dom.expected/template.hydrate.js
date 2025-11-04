// size: 273 (min) 189 (brotli)
const $for_content__num__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $num($scope._, $scope._.b + 1);
    }),
  ),
  $for_content__num = _._for_closure(0, $for_content__num__script),
  $for_content__i = _._const(3, ($scope) => _._text($scope.b, $scope.d)),
  $for_content__setup = $for_content__num,
  $for_content__$params = _._const(2, ($scope) =>
    $for_content__i($scope, $scope.c[0]),
  ),
  $for_content = _._content_branch(
    "<button> </button>",
    " D l",
    $for_content__setup,
    $for_content__$params,
  ),
  $for = _._for_to(0, $for_content),
  $num = _._let(1, ($scope) => {
    ($for($scope, [$scope.b, 0, 1]), $for_content__num($scope));
  });
init();

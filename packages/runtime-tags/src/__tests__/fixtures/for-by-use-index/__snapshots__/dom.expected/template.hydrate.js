// size: 425 (min) 275 (brotli)
const $if_content__last = _._if_closure(1, 0, ($scope) =>
    _._text($scope.a, $scope._.d),
  ),
  $if_content__setup = $if_content__last,
  $for_content__messages__OR__index__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      ($messages($scope._, $scope._.c.toSpliced($scope.e, 1)),
        $last($scope._, $scope.e));
    }),
  ),
  $for_content__messages__OR__index = _._or(
    5,
    $for_content__messages__OR__index__script,
  ),
  $for_content__messages = _._for_closure(0, $for_content__messages__OR__index),
  $for_content__setup = $for_content__messages,
  $for_content__index = _._const(4, $for_content__messages__OR__index),
  $for_content__$params = ($scope, $params2) => {
    ((($scope, message) => {
      _._html($scope, message, "b");
    })($scope, $params2[0]),
      $for_content__index($scope, $params2[1]));
  },
  $for = _._for_of(
    0,
    "<button> </button>",
    " D l",
    $for_content__setup,
    $for_content__$params,
  ),
  $messages = _._let(2, ($scope) => {
    ($for($scope, [$scope.c, (f) => f]), $for_content__messages($scope));
  }),
  $if = _._if(1, "<div> </div>", "D l", $if_content__setup),
  $last = _._let(3, ($scope) => {
    ($if($scope, void 0 !== $scope.d ? 0 : 1), $if_content__last($scope));
  });
init();

// size: 652 (min) 347 (brotli)
const $else_content__count = _._if_closure(0, 1, ($scope) =>
    _._text($scope.b, $scope._.c),
  ),
  $else_content__setup__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $for_content__editing($scope._, !0);
    }),
  ),
  $else_content__setup = ($scope) => {
    ($else_content__count._($scope), $else_content__setup__script($scope));
  },
  $if_content__counts__OR__count__script = _._script("a1", ($scope) =>
    _._on($scope.a, "click", function () {
      ($counts($scope._._, [
        ...$scope._._.b.slice(0, $scope._.M),
        $scope._.c + 1,
        ...$scope._._.b.slice($scope._.M + 1),
      ]),
        $for_content__editing($scope._, !1));
    }),
  ),
  $if_content__counts__OR__count = _._or(
    2,
    $if_content__counts__OR__count__script,
  ),
  $if_content__counts = _._closure_get(
    1,
    $if_content__counts__OR__count,
    ($scope) => $scope._._,
  ),
  $if_content__setup = ($scope) => {
    ($if_content__counts($scope), $if_content__count._($scope));
  },
  $if_content__count = _._if_closure(0, 0, ($scope) => {
    (_._text($scope.b, $scope._.c + 1), $if_content__counts__OR__count($scope));
  }),
  $for_content__if = _._if(
    0,
    "<button>Confirm <!></button>",
    " Db%l",
    $if_content__setup,
    "<button>Increment <!></button>",
    " Db%l",
    $else_content__setup,
  ),
  $for_content__editing = _._let(4, ($scope) =>
    $for_content__if($scope, $scope.e ? 0 : 1),
  ),
  $for_content__setup = ($scope) => $for_content__editing($scope, !1),
  $for_content__$params = ($scope, $params2) =>
    $for_content__count($scope, $params2[0]),
  $for_content__count = _._const(2, ($scope) => {
    ($if_content__count($scope), $else_content__count($scope));
  }),
  $for = _._for_of(
    0,
    "<!><!><!>",
    "b%c",
    $for_content__setup,
    $for_content__$params,
  ),
  $counts__closure = _._closure($if_content__counts),
  $counts = _._let(1, ($scope) => {
    ($for($scope, [$scope.b]), $counts__closure($scope));
  });
init();

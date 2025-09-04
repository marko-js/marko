// size: 811 (min) 403 (brotli)
const $else_content__setup__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $for_content__editing($scope._, !0);
    }),
  ),
  $else_content__setup = ($scope) => {
    ($else_content__count._($scope), $else_content__setup__script($scope));
  },
  $else_content__count = _._if_closure(2, 0, 1, ($scope, count) =>
    _._text($scope[1], count),
  ),
  $else_content = _._content_branch(
    "<button>Increment <!></button>",
    " Db%l",
    $else_content__setup,
  ),
  $if_content__counts__OR__count__OR__i__script = _._script(
    "a1",
    (
      $scope,
      {
        _: {
          _: { 1: counts },
          2: count,
          3: i,
        },
      },
    ) =>
      _._on($scope[0], "click", function () {
        ($counts(
          $scope._._,
          (counts = [...counts.slice(0, i), count + 1, ...counts.slice(i + 1)]),
        ),
          $for_content__editing($scope._, !1));
      }),
  ),
  $if_content__counts__OR__count__OR__i = _._or(
    2,
    $if_content__counts__OR__count__OR__i__script,
    2,
  ),
  $if_content__counts = _._closure_get(
    1,
    $if_content__counts__OR__count__OR__i,
    ($scope) => $scope._._,
  ),
  $if_content__count = _._if_closure(2, 0, 0, ($scope, count) => {
    (_._text($scope[1], count + 1),
      $if_content__counts__OR__count__OR__i($scope));
  }),
  $if_content__i = _._if_closure(
    3,
    0,
    0,
    $if_content__counts__OR__count__OR__i,
  ),
  $if_content__setup = ($scope) => {
    ($if_content__counts($scope),
      $if_content__count._($scope),
      $if_content__i._($scope));
  },
  $if_content = _._content_branch(
    "<button>Confirm <!></button>",
    " Db%l",
    $if_content__setup,
  ),
  $for_content__if = _._if(0, $if_content, $else_content),
  $for_content__editing = _._let(4, ($scope, editing) =>
    $for_content__if($scope, editing ? 0 : 1),
  ),
  $for_content__setup = ($scope) => {
    $for_content__editing($scope, !1);
  },
  $for_content__$params = _._const(1, ($scope, $params2) => {
    ($for_content__count($scope, $params2[0]),
      $for_content__i($scope, $params2[1]));
  }),
  $for_content__count = _._const(2, ($scope) => {
    ($if_content__count($scope), $else_content__count($scope));
  }),
  $for_content__i = _._const(3, $if_content__i),
  $for_content = _._content_branch(
    "<!><!><!>",
    "b%c",
    $for_content__setup,
    $for_content__$params,
  ),
  $for = _._for_of(0, $for_content),
  $counts__closure = _._closure($if_content__counts),
  $counts = _._let(1, ($scope, counts) => {
    ($for($scope, [counts]), $counts__closure($scope));
  });
init();

// size: 855 (min) 403 (brotli)
const $setup$else$content = _$.effect("a0", ($scope) =>
    _$.on($scope[0], "click", function () {
      $editing$for$content($scope._, !0);
    }),
  ),
  $count$else$content = _$.conditionalClosure(2, 0, 1, ($scope, count) =>
    _$.data($scope[1], count),
  ),
  $else_content = _$.createRenderer(
    "<button>Increment <!></button>",
    " Db%",
    $setup$else$content,
    0,
    $count$else$content,
  ),
  $expr_counts_count_i$if$content_effect = _$.effect(
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
      _$.on($scope[0], "click", function () {
        $counts($scope._._, [
          ...counts.slice(0, i),
          count + 1,
          ...counts.slice(i + 1),
        ]),
          $editing$for$content($scope._, !1);
      }),
  ),
  $expr_counts_count_i$if$content = _$.intersection(
    2,
    $expr_counts_count_i$if$content_effect,
    2,
  ),
  $counts$if$content = _$.dynamicClosureRead(
    1,
    $expr_counts_count_i$if$content,
    ($scope) => $scope._._,
  ),
  $count$if$content = _$.conditionalClosure(2, 0, 0, ($scope, count) => {
    _$.data($scope[1], count + 1), $expr_counts_count_i$if$content($scope);
  }),
  $i$if$content = _$.conditionalClosure(
    3,
    0,
    0,
    $expr_counts_count_i$if$content,
  ),
  $if_content = _$.createRenderer(
    "<button>Confirm <!></button>",
    " Db%",
    0,
    0,
    ($scope) => {
      $counts$if$content($scope),
        $count$if$content._($scope),
        $i$if$content._($scope);
    },
  ),
  $if$for$content = _$.conditional(0, $if_content, $else_content),
  $editing$for$content = _$.state(4, ($scope, editing) =>
    $if$for$content($scope, editing ? 0 : 1),
  ),
  $setup$for$content = ($scope) => {
    $editing$for$content($scope, !1);
  },
  $params2$for$content = _$.value(1, ($scope, $params2) => {
    $count$for$content($scope, $params2[0]),
      $i$for$content($scope, $params2[1]);
  }),
  $count$for$content = _$.value(2, ($scope) => {
    $count$if$content($scope), $count$else$content($scope);
  }),
  $i$for$content = _$.value(3, $i$if$content),
  $for_content = _$.createRenderer(
    "<!><!><!>",
    "D%D",
    $setup$for$content,
    $params2$for$content,
  ),
  $for = _$.loopOf(0, $for_content),
  $counts_closure = _$.dynamicClosure($counts$if$content),
  $counts = _$.state(1, ($scope, counts) => {
    $for($scope, [counts]), $counts_closure($scope);
  });
init();

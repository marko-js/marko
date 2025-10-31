// size: 560 (min) 222 (brotli)
const $ChildB_content__$pattern = _._const(7, ($scope) =>
    $ChildB_content__$bar($scope, $scope[7].bar),
  ),
  $ChildB_content__bar = _._const(9, ($scope) => _._text($scope[1], $scope[9])),
  $ChildB_content__count__OR__bar = _._or(11, ($scope) =>
    $ChildB_content__bar(
      $scope,
      void 0 !== $scope[8] ? $scope[8] : $scope._[7] + 1,
    ),
  ),
  $ChildB_content__$bar = _._const(8, $ChildB_content__count__OR__bar),
  $ChildB_content__count__OR__foo = _._or(10, ($scope) =>
    $ChildB_content__$pattern(
      $scope,
      void 0 !== $scope[6] ? $scope[6] : { bar: $scope._[7] + 2 },
    ),
  ),
  $ChildB_content__count = _._closure_get(7, ($scope) => {
    ($ChildB_content__count__OR__foo($scope),
      $ChildB_content__count__OR__bar($scope));
  }),
  $ChildA_content__$pattern = _._const(7, ($scope) =>
    $ChildA_content__$bar($scope, $scope[7].bar),
  ),
  $ChildA_content__bar = _._const(9, ($scope) => _._text($scope[1], $scope[9])),
  $ChildA_content__count__OR__bar = _._or(11, ($scope) =>
    $ChildA_content__bar(
      $scope,
      void 0 !== $scope[8] ? $scope[8] : $scope._[7] + 1,
    ),
  ),
  $ChildA_content__$bar = _._const(8, $ChildA_content__count__OR__bar),
  $ChildA_content__count__OR__foo = _._or(10, ($scope) =>
    $ChildA_content__$pattern(
      $scope,
      void 0 !== $scope[6] ? $scope[6] : { bar: $scope._[7] + 2 },
    ),
  ),
  $ChildA_content__count = _._closure_get(7, ($scope) => {
    ($ChildA_content__count__OR__foo($scope),
      $ChildA_content__count__OR__bar($scope));
  }),
  $count__closure = _._closure($ChildA_content__count, $ChildB_content__count),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope[6], "click", function () {
      $count($scope, $scope[7] + 1);
    }),
  ),
  $count = _._let(7, ($scope) => {
    ($count__closure($scope), $count__script($scope));
  });
init();

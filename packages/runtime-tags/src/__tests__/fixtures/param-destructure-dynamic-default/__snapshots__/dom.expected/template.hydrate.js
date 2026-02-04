// size: 492 (min) 219 (brotli)
const $ChildB_content__count__OR__foo = _._or(10, ($scope) =>
    (($scope, $pattern2) => $ChildB_content__$bar($scope, $pattern2.bar))(
      $scope,
      void 0 !== $scope.g ? $scope.g : { bar: $scope._.h + 2 },
    ),
  ),
  $ChildB_content__count__OR__bar = _._or(11, ($scope) =>
    (($scope, bar) => _._text($scope.b, bar))(
      $scope,
      void 0 !== $scope.i ? $scope.i : $scope._.h + 1,
    ),
  ),
  $ChildB_content__count = _._closure_get(7, ($scope) => {
    ($ChildB_content__count__OR__foo($scope),
      $ChildB_content__count__OR__bar($scope));
  }),
  $ChildB_content__$bar = _._const(8, $ChildB_content__count__OR__bar),
  $ChildA_content__count__OR__foo = _._or(10, ($scope) =>
    (($scope, $pattern) => $ChildA_content__$bar($scope, $pattern.bar))(
      $scope,
      void 0 !== $scope.g ? $scope.g : { bar: $scope._.h + 2 },
    ),
  ),
  $ChildA_content__count__OR__bar = _._or(11, ($scope) =>
    (($scope, bar) => _._text($scope.b, bar))(
      $scope,
      void 0 !== $scope.i ? $scope.i : $scope._.h + 1,
    ),
  ),
  $ChildA_content__count = _._closure_get(7, ($scope) => {
    ($ChildA_content__count__OR__foo($scope),
      $ChildA_content__count__OR__bar($scope));
  }),
  $ChildA_content__$bar = _._const(8, $ChildA_content__count__OR__bar),
  $count__closure = _._closure($ChildA_content__count, $ChildB_content__count),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope.g, "click", function () {
      $count($scope, $scope.h + 1);
    }),
  ),
  $count = _._let(7, ($scope) => {
    ($count__closure($scope), $count__script($scope));
  });
init();

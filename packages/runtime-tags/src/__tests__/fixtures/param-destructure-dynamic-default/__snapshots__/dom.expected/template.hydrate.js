// size: 500 (min) 222 (brotli)
const $ChildB_content__$pattern = ($scope, $pattern2) =>
    $ChildB_content__$bar($scope, $pattern2.bar),
  $ChildB_content__count__OR__$foo = _._or(10, ($scope) =>
    $ChildB_content__$pattern(
      $scope,
      $scope.g === void 0 ? { bar: $scope._.h + 2 } : $scope.g,
    ),
  ),
  $ChildB_content__bar = ($scope, bar) => _._text($scope.b, bar),
  $ChildB_content__count__OR__$bar = _._or(11, ($scope) =>
    $ChildB_content__bar(
      $scope,
      $scope.i === void 0 ? $scope._.h + 1 : $scope.i,
    ),
  ),
  $ChildB_content__count = _._closure_get(7, ($scope) => {
    ($ChildB_content__count__OR__$foo($scope),
      $ChildB_content__count__OR__$bar($scope));
  }),
  $ChildB_content__$bar = _._const(8, $ChildB_content__count__OR__$bar),
  $ChildA_content__$pattern = ($scope, $pattern) =>
    $ChildA_content__$bar($scope, $pattern.bar),
  $ChildA_content__count__OR__$foo = _._or(10, ($scope) =>
    $ChildA_content__$pattern(
      $scope,
      $scope.g === void 0 ? { bar: $scope._.h + 2 } : $scope.g,
    ),
  ),
  $ChildA_content__bar = ($scope, bar) => _._text($scope.b, bar),
  $ChildA_content__count__OR__$bar = _._or(11, ($scope) =>
    $ChildA_content__bar(
      $scope,
      $scope.i === void 0 ? $scope._.h + 1 : $scope.i,
    ),
  ),
  $ChildA_content__count = _._closure_get(7, ($scope) => {
    ($ChildA_content__count__OR__$foo($scope),
      $ChildA_content__count__OR__$bar($scope));
  }),
  $ChildA_content__$bar = _._const(8, $ChildA_content__count__OR__$bar),
  $count__closure = _._closure($ChildA_content__count, $ChildB_content__count),
  $count__script = _._script(`a0`, ($scope) =>
    _._on($scope.g, `click`, function () {
      $count($scope, $scope.h + 1);
    }),
  ),
  $count = _._let(7, ($scope) => {
    ($count__closure($scope), $count__script($scope));
  });
init();

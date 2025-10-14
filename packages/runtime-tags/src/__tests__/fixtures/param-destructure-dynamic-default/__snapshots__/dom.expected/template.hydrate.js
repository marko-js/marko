// size: 609 (min) 253 (brotli)
const $ChildB_content__$pattern = _._const(7, ($scope, $pattern2) =>
    $ChildB_content__$bar($scope, $pattern2.bar),
  ),
  $ChildB_content__bar = _._const(9, ($scope, bar) => _._text($scope[1], bar)),
  $ChildB_content__count__OR__bar = _._or(11, ($scope) => {
    let {
      _: { 7: count },
      8: $bar2,
    } = $scope;
    $ChildB_content__bar($scope, void 0 !== $bar2 ? $bar2 : count + 1);
  }),
  $ChildB_content__$bar = _._const(8, $ChildB_content__count__OR__bar),
  $ChildB_content__count__OR__foo = _._or(10, ($scope) => {
    let {
      _: { 7: count },
      6: $foo2,
    } = $scope;
    $ChildB_content__$pattern(
      $scope,
      void 0 !== $foo2 ? $foo2 : { bar: count + 2 },
    );
  }),
  $ChildB_content__count = _._closure_get(7, ($scope) => {
    ($ChildB_content__count__OR__foo($scope),
      $ChildB_content__count__OR__bar($scope));
  }),
  $ChildA_content__$pattern = _._const(7, ($scope, $pattern) =>
    $ChildA_content__$bar($scope, $pattern.bar),
  ),
  $ChildA_content__bar = _._const(9, ($scope, bar) => _._text($scope[1], bar)),
  $ChildA_content__count__OR__bar = _._or(11, ($scope) => {
    let {
      _: { 7: count },
      8: $bar,
    } = $scope;
    $ChildA_content__bar($scope, void 0 !== $bar ? $bar : count + 1);
  }),
  $ChildA_content__$bar = _._const(8, $ChildA_content__count__OR__bar),
  $ChildA_content__count__OR__foo = _._or(10, ($scope) => {
    let {
      _: { 7: count },
      6: $foo,
    } = $scope;
    $ChildA_content__$pattern(
      $scope,
      void 0 !== $foo ? $foo : { bar: count + 2 },
    );
  }),
  $ChildA_content__count = _._closure_get(7, ($scope) => {
    ($ChildA_content__count__OR__foo($scope),
      $ChildA_content__count__OR__bar($scope));
  }),
  $count__closure = _._closure($ChildA_content__count, $ChildB_content__count),
  $count__script = _._script("a0", ($scope, { 7: count }) =>
    _._on($scope[6], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(7, ($scope) => {
    ($count__closure($scope), $count__script($scope));
  });
init();

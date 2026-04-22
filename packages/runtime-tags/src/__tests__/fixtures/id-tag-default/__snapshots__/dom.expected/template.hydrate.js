// size: 255 (min) 169 (brotli)
const $sometimesBar = ($scope, sometimesBar) =>
    _._attr($scope.c, `id`, sometimesBar),
  $bar__OR__baz__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      ($bar($scope, $scope.e ? null : `bar`),
        $baz($scope, $scope.f ? null : `baz`));
    }),
  ),
  $bar__OR__baz = _._or(6, $bar__OR__baz__script),
  $bar = _._let(4, ($scope) => {
    ($sometimesBar($scope, $scope.e || _._id($scope)), $bar__OR__baz($scope));
  }),
  $sometimesBaz = ($scope, sometimesBaz) =>
    _._attr($scope.d, `id`, sometimesBaz),
  $baz = _._let(5, ($scope) => {
    ($sometimesBaz($scope, $scope.f || _._id($scope)), $bar__OR__baz($scope));
  });
init();

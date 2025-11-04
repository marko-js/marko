// size: 156 (min) 117 (brotli)
const $child_content__count__script = _._script("b0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope._, $scope._.b + 1);
    }),
  ),
  $child_content__count = _._closure_get(1, ($scope) => {
    (_._text($scope.b, $scope._.b), $child_content__count__script($scope));
  }),
  $count__closure = _._closure($child_content__count),
  $count = _._let(1, $count__closure);
init();

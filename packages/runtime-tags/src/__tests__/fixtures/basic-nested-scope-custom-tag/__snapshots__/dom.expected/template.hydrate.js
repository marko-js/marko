// size: 160 (min) 120 (brotli)
const $child_content__count__script = _._script("b0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope._, $scope._[1] + 1);
    }),
  ),
  $child_content__count = _._closure_get(1, ($scope) => {
    (_._text($scope[1], $scope._[1]), $child_content__count__script($scope));
  }),
  $count__closure = _._closure($child_content__count),
  $count = _._let(1, $count__closure);
init();

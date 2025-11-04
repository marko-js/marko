// size: 192 (min) 137 (brotli)
const $item_content__mult__OR__item = _._or(1, ($scope) =>
    _._text($scope.a, $scope.f * $scope._.d),
  ),
  $item_content__mult = _._closure_get(3, $item_content__mult__OR__item),
  $mult__closure = _._closure($item_content__mult),
  $mult__script = _._script("b1", ($scope) =>
    _._on($scope.b, "click", function () {
      $mult($scope, $scope.d + 1);
    }),
  ),
  $mult = _._let(3, ($scope) => {
    (_._text($scope.c, $scope.d),
      $mult__closure($scope),
      $mult__script($scope));
  });
init();

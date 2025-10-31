// size: 199 (min) 149 (brotli)
const $item_content__mult__OR__item = _._or(1, ($scope) =>
    _._text($scope[0], $scope[5] * $scope._[3]),
  ),
  $item_content__mult = _._closure_get(3, $item_content__mult__OR__item),
  $mult__closure = _._closure($item_content__mult),
  $mult__script = _._script("b1", ($scope) =>
    _._on($scope[1], "click", function () {
      $mult($scope, $scope[3] + 1);
    }),
  ),
  $mult = _._let(3, ($scope) => {
    (_._text($scope[2], $scope[3]),
      $mult__closure($scope),
      $mult__script($scope));
  });
init();

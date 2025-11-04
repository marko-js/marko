// size: 239 (min) 169 (brotli)
const $items__OR__index__script = _._script("a0", ($scope) =>
    _._on($scope.c, "click", function () {
      const newItems = $scope.d.slice(1);
      ($items($scope, newItems),
        $index($scope, ($scope.f + 1) % newItems.length));
    }),
  ),
  $items__OR__index = _._or(6, ($scope) => {
    (_._text($scope.b, $scope.d[$scope.f]), $items__OR__index__script($scope));
  }),
  $items = _._let(3, ($scope) => {
    ($items_($scope, $scope.d?.[0]), $items__OR__index($scope));
  }),
  $items_ = _._const(4, ($scope) => _._text($scope.a, $scope.e)),
  $index = _._let(5, $items__OR__index);
init();

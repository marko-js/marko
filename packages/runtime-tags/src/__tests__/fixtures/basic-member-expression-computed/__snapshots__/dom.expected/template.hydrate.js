// size: 248 (min) 175 (brotli)
const $items__OR__index__script = _._script("a0", ($scope) =>
    _._on($scope[2], "click", function () {
      const newItems = $scope[3].slice(1);
      ($items($scope, newItems),
        $index($scope, ($scope[5] + 1) % newItems.length));
    }),
  ),
  $items__OR__index = _._or(6, ($scope) => {
    (_._text($scope[1], $scope[3][$scope[5]]),
      $items__OR__index__script($scope));
  }),
  $items = _._let(3, ($scope) => {
    ($items_($scope, $scope[3]?.[0]), $items__OR__index($scope));
  }),
  $items_ = _._const(4, ($scope) => _._text($scope[0], $scope[4])),
  $index = _._let(5, $items__OR__index);
init();

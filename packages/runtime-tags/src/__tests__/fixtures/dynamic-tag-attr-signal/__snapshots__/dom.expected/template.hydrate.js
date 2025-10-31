// size: 134 (min) 129 (brotli)
const $className__script = _._script("a0", ($scope) =>
    _._on($scope[1], "click", function () {
      $className($scope, "A" === $scope[2] ? "B" : "A");
    }),
  ),
  $className = _._let(2, ($scope) => {
    (_._attr_class($scope[0], $scope[2]), $className__script($scope));
  });
init();

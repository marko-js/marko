// size: 166 (min) 115 (brotli)
const $foo = _._let(3, ($scope) => {
  (_._attr_class($scope.a, ($scope.d, $scope.d.class)),
    _._attr_class($scope.b, ($scope.d, $scope.d.class)));
});
(_._script("a0", ($scope) =>
  _._on($scope.c, "click", function () {
    $foo($scope, { class: "baz" });
  }),
),
  init());

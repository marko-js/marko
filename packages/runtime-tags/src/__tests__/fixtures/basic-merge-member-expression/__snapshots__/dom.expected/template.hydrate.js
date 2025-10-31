// size: 173 (min) 118 (brotli)
const $foo = _._let(3, ($scope) => {
  (_._attr_class($scope[0], ($scope[3], $scope[3].class)),
    _._attr_class($scope[1], ($scope[3], $scope[3].class)));
});
(_._script("a0", ($scope) =>
  _._on($scope[2], "click", function () {
    $foo($scope, { class: "baz" });
  }),
),
  init());

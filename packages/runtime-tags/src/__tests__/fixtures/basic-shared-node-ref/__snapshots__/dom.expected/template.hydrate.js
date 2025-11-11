// size: 359 (min) 216 (brotli)
const $for_content__x = _._const(2, ($scope) => _._text($scope.a, $scope.c)),
  $for_content__$params = _._const(1, ($scope) =>
    $for_content__x($scope, $scope.b[0]),
  ),
  $open__script = _._script("a0", ($scope) =>
    _._on($scope.b, "click", function () {
      $open($scope, !$scope.d);
    }),
  ),
  $open = _._let(3, ($scope) => {
    (_._attr($scope.a, "hidden", !$scope.d), $open__script($scope));
  }),
  $for = _._for_of(0, "<li> </li>", "D l", 0, $for_content__$params),
  $list__script = _._script("a1", ($scope) =>
    _._on($scope.c, "click", function () {
      $list($scope, [].concat($scope.e).reverse());
    }),
  ),
  $list = _._let(4, ($scope) => {
    ($for($scope, [
      $scope.e,
      function (x) {
        return x;
      },
    ]),
      $list__script($scope));
  });
init();

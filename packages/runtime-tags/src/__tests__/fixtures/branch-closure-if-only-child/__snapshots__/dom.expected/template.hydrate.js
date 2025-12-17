// size: 211 (min) 129 (brotli)
const $if_content__count = _._if_closure(2, 0, ($scope) =>
    _._text($scope.a, $scope._.d),
  ),
  $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.d + 1);
    }),
  ),
  $count = _._let(3, ($scope) => {
    (_._text($scope.b, $scope.d),
      $if_content__count($scope),
      $count__script($scope));
  });
(_._script("a1", ($scope) => _._on($scope.c, "click", function () {})), init());

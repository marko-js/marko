// size: 151 (min) 126 (brotli)
const $for_content__open__script = _._script("a0", ($scope) =>
    _._on($scope.c, "click", function () {
      $for_content__open($scope, !$scope.m);
    }),
  ),
  $for_content__open = _._let(12, ($scope) => {
    (_._attr($scope.a, "hidden", !$scope.m),
      _._text($scope.d, $scope.m ? "[-]" : "[+]"),
      $for_content__open__script($scope));
  });
init();

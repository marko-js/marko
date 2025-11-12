// size: 130 (min) 116 (brotli)
const $for_content__open__script = _script("a0", ($scope) =>
    _on($scope.c, "click", function () {
      $for_content__open($scope, !$scope.m);
    }),
  ),
  $for_content__open = _let(12, ($scope) => {
    (_attr($scope.a, "hidden", !$scope.m),
      _text($scope.d, $scope.m ? "[-]" : "[+]"),
      $for_content__open__script($scope));
  });
init();

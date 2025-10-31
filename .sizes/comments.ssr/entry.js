// size: 139 (min) 112 (brotli)
const $for_content__open__script = _script("a0", ($scope) =>
    _on($scope[2], "click", function () {
      $for_content__open($scope, !$scope[12]);
    }),
  ),
  $for_content__open = _let(12, ($scope) => {
    (_attr($scope[0], "hidden", !$scope[12]),
      _text($scope[3], $scope[12] ? "[-]" : "[+]"),
      $for_content__open__script($scope));
  });
init();

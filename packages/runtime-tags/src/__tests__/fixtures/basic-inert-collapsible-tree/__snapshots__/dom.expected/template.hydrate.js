// size: 160 (min) 124 (brotli)
const $for_content__open__script = _._script("a0", ($scope) =>
    _._on($scope[2], "click", function () {
      $for_content__open($scope, !$scope[12]);
    }),
  ),
  $for_content__open = _._let(12, ($scope) => {
    (_._attr($scope[0], "hidden", !$scope[12]),
      _._text($scope[3], $scope[12] ? "[-]" : "[+]"),
      $for_content__open__script($scope));
  });
init();

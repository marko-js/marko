// size: 162 (min) 121 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[1] + 1);
    }),
  ),
  $count = _._let(1, ($scope) => {
    (_._text_content(
      $scope[0],
      `\n  .test {\n    content: ${$scope[1]}\n  }\n`,
    ),
      $count__script($scope));
  });
init();

// size: 158 (min) 124 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.b + 1);
    }),
  ),
  $count = _._let(1, ($scope) => {
    (_._text_content($scope.a, `\n  .test {\n    content: ${$scope.b}\n  }\n`),
      $count__script($scope));
  });
init();

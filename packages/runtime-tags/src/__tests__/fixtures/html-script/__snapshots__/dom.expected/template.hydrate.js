// size: 213 (min) 154 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._text_content(
      $scope.a,
      `\n  {\n    "imports": {\n      "${$scope.c}": "https://markojs.com",\n    }\n  }\n`,
    ),
      _._text($scope.b, $scope.c),
      $count__script($scope));
  });
init();

// size: 170 (min) 125 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope.a, "click", function () {
      $count($scope, $scope.b + 1);
    }),
  ),
  $count = _._let(1, ($scope) => {
    (_._text_content(
      $scope.a,
      `\n  .test {\n    content: ${_._to_text($scope.b)}\n  }\n`,
    ),
      $count__script($scope));
  });
init();

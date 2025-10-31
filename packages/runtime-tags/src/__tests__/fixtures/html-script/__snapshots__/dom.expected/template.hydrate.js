// size: 219 (min) 159 (brotli)
const $count__script = _._script("a0", ($scope) =>
    _._on($scope[0], "click", function () {
      $count($scope, $scope[2] + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._text_content(
      $scope[0],
      `\n  {\n    "imports": {\n      "${$scope[2]}": "https://markojs.com",\n    }\n  }\n`,
    ),
      _._text($scope[1], $scope[2]),
      $count__script($scope));
  });
init();

// size: 219 (min) 152 (brotli)
const $count__script = _._script(`a0`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $count($scope, $scope.c + 1);
    }),
  ),
  $count = _._let(2, ($scope) => {
    (_._text_content(
      $scope.a,
      `
  {
    "imports": {
      "${_._to_text($scope.c)}": "https://markojs.com",
    }
  }
`,
    ),
      _._text($scope.b, $scope.c),
      $count__script($scope));
  });
init();

// size: 222 (min) 170 (brotli)
const $count__script = _._script("a0", ($scope, { 2: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(2, ($scope, count) => {
    (_._text_content(
      $scope[0],
      `\n  {\n    "imports": {\n      "${count}": "https://markojs.com",\n    }\n  }\n`,
    ),
      _._text($scope[1], count),
      $count__script($scope));
  });
init();

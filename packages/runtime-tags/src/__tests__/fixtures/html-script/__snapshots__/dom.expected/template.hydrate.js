// size: 224 (min) 171 (brotli)
const $count_effect = _$.effect("a1", ($scope, { 2: count }) =>
    _$.on($scope[0], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(2, ($scope, count) => {
    _$.textContent(
      $scope[0],
      `\n  {\n    "imports": {\n      "${count}": "https://markojs.com",\n    }\n  }\n`,
    ),
      _$.data($scope[1], count),
      $count_effect($scope);
  });
init();

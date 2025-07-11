// size: 165 (min) 133 (brotli)
const $count_effect = _$.effect("a1", ($scope, { 1: count }) =>
    _$.on($scope[0], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(1, ($scope, count) => {
    (_$.textContent($scope[0], `\n  .test {\n    content: ${count}\n  }\n`),
      $count_effect($scope));
  });
init();

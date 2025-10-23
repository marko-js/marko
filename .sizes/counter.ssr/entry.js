// size: 106 (min) 97 (brotli)
const $clickCount__script = _script("a0", ($scope, { 2: clickCount }) =>
    _on($scope[0], "click", function () {
      $clickCount($scope, ++clickCount);
    }),
  ),
  $clickCount = _let(2, ($scope, clickCount) => {
    (_text($scope[1], clickCount), $clickCount__script($scope));
  });
init();

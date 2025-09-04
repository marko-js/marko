// size: 124 (min) 115 (brotli)
const $clickCount__script = _._script("a0", ($scope, { 2: clickCount }) =>
    _._on(
      $scope[0],
      "click",
      clickCount <= 1 &&
        (() => {
          $clickCount($scope, ++clickCount);
        }),
    ),
  ),
  $clickCount = _._let(2, ($scope, clickCount) => {
    (_._text($scope[1], clickCount), $clickCount__script($scope));
  });
init();

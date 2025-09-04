// size: 164 (min) 130 (brotli)
const $clickCount__script = _._script("a0", ($scope, { 3: clickCount }) =>
    _._on($scope[0], "click", function () {
      ($lastClickCount($scope, clickCount), $clickCount($scope, ++clickCount));
    }),
  ),
  $clickCount = _._let(3, ($scope, clickCount) => {
    (_._text($scope[1], clickCount), $clickCount__script($scope));
  }),
  $lastClickCount = _._let(4, ($scope, lastClickCount) =>
    _._text($scope[2], lastClickCount),
  );
init();

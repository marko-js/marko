// size: 160 (min) 129 (brotli)
const $clickCount__script = _._script("a0", ($scope, { 4: clickCount }) =>
    _._on($scope[0], "click", function () {
      (($scope[2].innerHTML =
        ($clickCount($scope, ++clickCount), clickCount - 1)),
        ($scope[3].innerHTML = clickCount));
    }),
  ),
  $clickCount = _._let(4, ($scope, clickCount) => {
    (_._text($scope[1], clickCount), $clickCount__script($scope));
  });
init();

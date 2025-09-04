// size: 120 (min) 122 (brotli)
const $b__script = _._script("a0", ($scope, { 6: b }) =>
    _._on($scope[0], "click", () => ($b($scope, ++b), b - 1)),
  ),
  $b = _._let(6, ($scope, b) => {
    (_._text($scope[2], b), $b__script($scope));
  });
init();

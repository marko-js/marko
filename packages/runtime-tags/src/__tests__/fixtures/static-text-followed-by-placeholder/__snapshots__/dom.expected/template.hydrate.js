// size: 122 (min) 107 (brotli)
const $count__script = _._script("a0", ($scope, { 2: count }) =>
    _._on($scope[1], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(2, ($scope, count) => {
    (_._text($scope[0], count), $count__script($scope));
  });
init();

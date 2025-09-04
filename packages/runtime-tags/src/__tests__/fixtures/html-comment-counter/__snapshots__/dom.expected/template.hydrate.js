// size: 159 (min) 123 (brotli)
const $count__script = _._script("a0", ($scope, { 3: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(3, ($scope, count) => {
    (_._text($scope[1], count),
      _._text($scope[2], `${count} + ${count} = ${count + count}`),
      $count__script($scope));
  });
init();

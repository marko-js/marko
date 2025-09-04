// size: 220 (min) 155 (brotli)
const $pattern2 = _._const(4, ($scope, $pattern) => $a($scope, $pattern.a)),
  $count__script = _._script("a0", ($scope, { 3: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(3, ($scope, count) => {
    ($pattern2($scope, { a: count }), $count__script($scope));
  }),
  $a = _._const(5, ($scope, a) => {
    (_._text($scope[1], a), $b($scope, a));
  }),
  $b = ($scope, b) => {
    _._text($scope[2], b);
  };
init();

// size: 158 (min) 147 (brotli)
const $a__OR__b__script = _._script("a0", ($scope, { 2: a, 3: b }) =>
    _._on($scope[0], "click", function () {
      $a($scope, (a = a.map((a) => b)));
    }),
  ),
  $a__OR__b = _._or(4, $a__OR__b__script),
  $a = _._let(2, ($scope, a) => {
    (_._text($scope[1], a.join("")), $a__OR__b($scope));
  });
init();

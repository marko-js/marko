// size: 290 (min) 184 (brotli)
const $x__OR__direction__script = _._script(
    "a0",
    ($scope, { 4: x, 5: direction }) =>
      _._on($scope[2], "click", function () {
        "up" === direction
          ? $x($scope, ++x)
          : "down" === direction && $x($scope, --x);
      }),
  ),
  $x__OR__direction = _._or(6, $x__OR__direction__script),
  $x = _._let(4, ($scope, x) => {
    (_._text($scope[3], x), $x__OR__direction($scope));
  }),
  $direction = _._let(5, $x__OR__direction);
(_._script("a1", ($scope) => {
  (_._on($scope[0], "click", function () {
    $direction($scope, "up");
  }),
    _._on($scope[1], "click", function () {
      $direction($scope, "down");
    }));
}),
  init());

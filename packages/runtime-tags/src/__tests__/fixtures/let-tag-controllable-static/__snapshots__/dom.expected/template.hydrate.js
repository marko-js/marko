// size: 232 (min) 166 (brotli)
const $y__script = _._script("a1", ($scope, { 4: y }) =>
    _._on($scope[0], "click", function () {
      $y($scope, ++y);
    }),
  ),
  $y = _._let(4, ($scope, y) => {
    (_._text($scope[2], y), $y__script($scope));
  }),
  $x = _._let(3, ($scope, x) => {
    (_._text($scope[1], x), $y($scope, x, $valueChange($scope)));
  });
function $valueChange($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}
(_._resume("a0", $valueChange), init());

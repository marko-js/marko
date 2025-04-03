// size: 271 (min) 160 (brotli)
const createWrapper = $createWrapper,
  $a = _$.value(5, ($scope, a) => {
    _$.data($scope[1], a),
      (($scope, b) => {
        _$.data($scope[2], b);
      })($scope, a);
  }),
  $pattern2 = _$.value(4, ($scope, $pattern) => $a($scope, $pattern.a)),
  $count_effect = _$.effect("a1", ($scope, { 3: count }) =>
    _$.on($scope[0], "click", function () {
      $count($scope, count + 1);
    }),
  ),
  $count = _$.state(3, ($scope, count) => {
    $pattern2($scope, createWrapper(count)), $count_effect($scope);
  });
function $createWrapper(a) {
  return { a: a };
}
_$.register("a0", $createWrapper), init();

// size: 190 (min) 150 (brotli)
const $increment2_effect = _$.effect("a1", ($scope, { 3: increment }) =>
    _$.on($scope[0], "click", increment),
  ),
  $increment2 = _$.value(3, $increment2_effect),
  $clickCount = _$.state(2, ($scope, clickCount) => {
    (_$.data($scope[1], clickCount), $increment2($scope, $increment($scope)));
  });
function $increment($scope, { 2: clickCount } = $scope) {
  return function () {
    $clickCount($scope, ++clickCount);
  };
}
(_$.register("a0", $increment), init());

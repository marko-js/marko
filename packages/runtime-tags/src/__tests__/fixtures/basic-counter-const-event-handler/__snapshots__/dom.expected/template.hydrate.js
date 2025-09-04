// size: 192 (min) 146 (brotli)
const $increment2__script = _._script("a1", ($scope, { 3: increment }) =>
    _._on($scope[0], "click", increment),
  ),
  $increment2 = _._const(3, $increment2__script),
  $clickCount = _._let(2, ($scope, clickCount) => {
    (_._text($scope[1], clickCount), $increment2($scope, $increment($scope)));
  });
function $increment($scope, { 2: clickCount } = $scope) {
  return function () {
    $clickCount($scope, ++clickCount);
  };
}
(_._resume("a0", $increment), init());

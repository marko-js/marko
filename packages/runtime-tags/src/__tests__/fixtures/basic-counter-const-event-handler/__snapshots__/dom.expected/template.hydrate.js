// size: 181 (min) 152 (brotli)
const $increment2__script = _._script("a1", ($scope) =>
    _._on($scope[0], "click", $scope[3]),
  ),
  $increment2 = _._const(3, $increment2__script),
  $clickCount = _._let(2, ($scope) => {
    (_._text($scope[1], $scope[2]), $increment2($scope, $increment($scope)));
  });
function $increment($scope) {
  return function () {
    $clickCount($scope, $scope[2] + 1);
  };
}
(_._resume("a0", $increment), init());

// size: 235 (min) 119 (brotli)
(_._script(`a0`, ($scope) => $scope.b.action()),
  _._script(`b2`, ($scope) => ($scope.b.innerHTML = `works`)));
function $action2($scope) {
  return function () {
    $scope.b.classList.add(`child2`);
  };
}
function $action($scope) {
  return function () {
    $scope.b.classList.add(`child1`);
  };
}
(_._resume(`b1`, $action2), _._resume(`b0`, $action), init());

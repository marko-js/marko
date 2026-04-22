// size: 144 (min) 100 (brotli)
_._script(`a2`, ($scope) => $scope.b());
function $run($scope) {
  return function () {
    $scope.a.innerHTML = $scope._.b();
  };
}
function $text() {
  return `HI`;
}
(_._resume(`a1`, $run), _._resume(`a0`, $text), init());

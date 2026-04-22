// size: 100 (min) 80 (brotli)
_._script(`a1`, ($scope) => ($scope.a.textContent = $scope.c.bar()));
function $baz($scope) {
  return () => $scope.b?.bar;
}
(_._resume(`a0`, $baz), init());

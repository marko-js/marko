// size: 148 (min) 88 (brotli)
(_._hoist_resume(`a2`, 0), _._hoist_resume(`a3`, 4));
function $hoist2($scope) {
  return () => $scope._._.d;
}
function $hoist($scope) {
  return () => $scope.d;
}
(_._resume(`a1`, $hoist2), _._resume(`a0`, $hoist), init());

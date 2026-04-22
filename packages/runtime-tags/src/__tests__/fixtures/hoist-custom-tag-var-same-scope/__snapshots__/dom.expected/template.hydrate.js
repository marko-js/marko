// size: 144 (min) 100 (brotli)
_._script(`b0`, ($scope) => $scope.c);
function $_return($scope) {
  return () => (html) => ($scope.a.innerHTML = html);
}
(_._resume(`a0`, $_return),
  _._hoist_resume(`c0`, 3),
  _._var_resume(`c1`, _._const(3)),
  init());

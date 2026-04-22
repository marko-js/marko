// size: 335 (min) 129 (brotli)
(_._script(
  `a3`,
  ($scope) => ($scope.a.textContent = $scope.f.bar() || `missing a`),
),
  _._script(
    `a4`,
    ($scope) => ($scope.b.textContent = $scope.g.baz() || `missing b`),
  ),
  _._script(
    `a5`,
    ($scope) => ($scope.c.textContent = $scope.h.baz() || `missing c`),
  ));
function $a($scope) {
  return () => $scope.d?.bar;
}
function $b($scope) {
  return () => $scope.d?.bar.baz;
}
function $c($scope) {
  return () => $scope.e?.baz;
}
(_._resume(`a0`, $a), _._resume(`a1`, $b), _._resume(`a2`, $c), init());

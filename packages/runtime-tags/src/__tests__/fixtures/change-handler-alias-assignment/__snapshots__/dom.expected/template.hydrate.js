// size: 137 (min) 99 (brotli)
_._script(`a1`, ($scope) =>
  _._on($scope.a, `click`, function () {
    $scope.c(`After`);
  }),
);
function $fooBar($scope) {
  return function (v) {
    $scope.a.textContent = v;
  };
}
(_._resume(`a0`, $fooBar), init());

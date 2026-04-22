// size: 69 (min) 71 (brotli)
function $bar($scope) {
  return function (test) {
    return $scope.d + test;
  };
}
(_._resume(`a0`, $bar), init());

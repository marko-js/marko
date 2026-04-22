// size: 189 (min) 123 (brotli)
_._script(`a1`, ($scope) => $scope.b());
function $setText($scope) {
  return function (arg) {
    if (arg)
      throw Error(
        `Expected no argument to be passed, but received "${typeof arg}".`,
      );
    $scope.a.textContent = typeof arg;
  };
}
(_._resume(`a0`, $setText), init());

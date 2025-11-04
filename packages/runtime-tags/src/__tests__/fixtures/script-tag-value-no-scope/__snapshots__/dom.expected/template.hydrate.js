// size: 190 (min) 121 (brotli)
(_._script("a1", ($scope) => $scope.b()),
  _._resume("a0", function ($scope) {
    return function (arg) {
      if (arg)
        throw new Error(
          `Expected no argument to be passed, but received "${typeof arg}".`,
        );
      $scope.a.textContent = typeof arg;
    };
  }),
  init());

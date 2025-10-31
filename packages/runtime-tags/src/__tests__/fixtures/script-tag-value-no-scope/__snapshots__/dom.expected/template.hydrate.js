// size: 192 (min) 122 (brotli)
(_._script("a1", ($scope) => $scope[1]()),
  _._resume("a0", function ($scope) {
    return function (arg) {
      if (arg)
        throw new Error(
          `Expected no argument to be passed, but received "${typeof arg}".`,
        );
      $scope[0].textContent = typeof arg;
    };
  }),
  init());

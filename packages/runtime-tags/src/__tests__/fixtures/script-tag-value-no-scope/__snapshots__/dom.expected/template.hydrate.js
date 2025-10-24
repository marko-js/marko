// size: 195 (min) 125 (brotli)
(_._script("a1", ({ 1: setText }) => setText()),
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

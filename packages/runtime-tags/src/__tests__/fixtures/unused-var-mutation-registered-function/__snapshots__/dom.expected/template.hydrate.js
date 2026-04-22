// size: 75 (min) 73 (brotli)
const identity = (fn) => fn;
(_._script(`a0`, ($scope) =>
  _._on(
    $scope.a,
    `click`,
    identity(() => {
      "updated";
    }),
  ),
),
  init());

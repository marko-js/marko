// size: 149 (min) 111 (brotli)
const identity = (fn) => fn;
(_2._script(`a0`, ($scope) =>
  _2._on(
    $scope.a,
    `click`,
    identity((_, el) => {
      let bar;
      ((($result, value) => (({ value, bar } = $result), $result))({
        value: `updated`,
        bar: `bar`,
      }),
        (el.textContent = bar));
    }),
  ),
),
  init());

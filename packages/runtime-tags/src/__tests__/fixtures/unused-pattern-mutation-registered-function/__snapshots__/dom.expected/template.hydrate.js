// size: 131 (min) 103 (brotli)
(_2._script("a0", ($scope) =>
  _2._on($scope.a, "click", (_, el) => {
    let bar;
    var $result, value;
    (($result = { value: "updated", bar: "bar" }),
      ({ value: value, bar: bar } = $result),
      (el.textContent = bar));
  }),
),
  init());

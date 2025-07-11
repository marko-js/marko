// size: 100 (min) 67 (brotli)
(_$.effect("a0", ($scope) =>
  _$.on($scope[0], "click", function () {
    document.getElementById("count").textContent++;
  }),
),
  init());

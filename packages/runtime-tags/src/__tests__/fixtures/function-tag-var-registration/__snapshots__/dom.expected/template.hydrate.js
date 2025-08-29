// size: 153 (min) 102 (brotli)
(_$.effect("a2", ($scope, { 3: onClick }) =>
  _$.on($scope[1], "click", onClick),
),
  _$.register("a1", function (ev) {
    ev.target.textContent = "after";
  }),
  _$.register("a0", function (a, b) {
    return a + b;
  }),
  init());

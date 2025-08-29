// size: 110 (min) 97 (brotli)
(_$.effect("a1", ($scope, { 3: onClick }) =>
  _$.on($scope[1], "click", onClick),
),
  _$.register("a0", function (ev) {
    ev.target.textContent = "after";
  }),
  init());

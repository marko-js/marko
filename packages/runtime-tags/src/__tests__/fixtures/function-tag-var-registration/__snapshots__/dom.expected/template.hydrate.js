// size: 111 (min) 97 (brotli)
(_._script("a1", ($scope, { 3: onClick }) =>
  _._on($scope[1], "click", onClick),
),
  _._resume("a0", function (ev) {
    ev.target.textContent = "after";
  }),
  init());

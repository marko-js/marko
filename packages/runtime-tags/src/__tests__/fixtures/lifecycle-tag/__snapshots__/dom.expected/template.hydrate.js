// size: 264 (min) 134 (brotli)
const $x_effect = _$.effect("a0", ($scope, { 1: x }) => {
    (_$.lifecycle($scope, 2, {
      onMount: function () {
        document.getElementById("ref").textContent = "Mount " + x;
      },
      onUpdate: function () {
        document.getElementById("ref").textContent = "Update " + x;
      },
    }),
      _$.on($scope[0], "click", function () {
        $x($scope, x + 1);
      }));
  }),
  $x = _$.state(1, $x_effect);
init();

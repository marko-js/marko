// size: 251 (min) 155 (brotli)
const $x_effect = _$.effect("a0", ($scope, { 1: x }) => {
    (_$.lifecycle($scope, 2, {
      onMount: function () {
        this.onUpdate();
      },
      onUpdate: function () {
        ((document.getElementById("ref").textContent =
          `x=${x}, was=${this.cur}`),
          (this.cur = x));
      },
    }),
      _$.on($scope[0], "click", function () {
        $x($scope, ++x);
      }));
  }),
  $x = _$.state(1, $x_effect);
init();

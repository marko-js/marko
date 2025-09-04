// size: 253 (min) 159 (brotli)
const $x__script = _._script("a0", ($scope, { 1: x }) => {
    (_._lifecycle($scope, 2, {
      onMount: function () {
        this.onUpdate();
      },
      onUpdate: function () {
        ((document.getElementById("ref").textContent =
          `x=${x}, was=${this.cur}`),
          (this.cur = x));
      },
    }),
      _._on($scope[0], "click", function () {
        $x($scope, ++x);
      }));
  }),
  $x = _._let(1, $x__script);
init();

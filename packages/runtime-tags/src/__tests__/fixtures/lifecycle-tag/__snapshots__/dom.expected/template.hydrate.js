// size: 266 (min) 142 (brotli)
const $x__script = _._script("a0", ($scope, { 1: x }) => {
    (_._lifecycle($scope, 2, {
      onMount: function () {
        document.getElementById("ref").textContent = "Mount " + x;
      },
      onUpdate: function () {
        document.getElementById("ref").textContent = "Update " + x;
      },
    }),
      _._on($scope[0], "click", function () {
        $x($scope, ++x);
      }));
  }),
  $x = _._let(1, $x__script);
init();

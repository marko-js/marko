// size: 280 (min) 148 (brotli)
const _x_effect = _$.effect("a0", (_scope, { 1: x }) => {
    _$.lifecycle(_scope, 3, {
      onMount: function () {
        document.getElementById("ref").textContent = "Mount " + x;
      },
      onUpdate: function () {
        document.getElementById("ref").textContent = "Update " + x;
      },
    }),
      _$.on(_scope[0], "click", function () {
        _x(_scope, x + 1);
      });
  }),
  _x = _$.state(1, (_scope, x) => _x_effect(_scope));
init();

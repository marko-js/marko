// size: 267 (min) 170 (brotli)
const _x_effect = _$.effect("a0", (_scope, { 1: x }) => {
    _$.lifecycle(_scope, 3, {
      onMount: function () {
        this.onUpdate();
      },
      onUpdate: function () {
        (document.getElementById("ref").textContent =
          `x=${x}, was=${this.cur}`),
          (this.cur = x);
      },
    }),
      _$.on(_scope[0], "click", function () {
        _x(_scope, x + 1);
      });
  }),
  _x = _$.state(1, (_scope, x) => _x_effect(_scope));
init();

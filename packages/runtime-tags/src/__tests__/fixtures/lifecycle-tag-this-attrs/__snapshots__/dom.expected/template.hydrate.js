// size: 153 (min) 115 (brotli)
const _x = _$.state(1, (_scope, x) => _$.data(_scope[0], x));
_$.effect("a0", (_scope) =>
  _$.lifecycle(_scope, 3, {
    x: 1,
    setX: function (value) {
      _x(_scope, value);
    },
    onMount: function () {
      this.setX(this.x);
    },
  }),
),
  init();

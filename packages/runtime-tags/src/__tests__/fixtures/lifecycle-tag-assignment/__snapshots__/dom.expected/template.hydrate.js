// size: 261 (min) 163 (brotli)
const _prev = _$.state(4, (_scope, prev) => _$.data(_scope[1], prev)),
  _x_effect = _$.effect("a0", (_scope, { 3: x }) => {
    _$.lifecycle(_scope, 4, {
      onMount: function () {
        this.cur = x;
      },
      onUpdate: function () {
        _prev(_scope, this.cur), (this.cur = x);
      },
    }),
      _$.on(_scope[2], "click", function () {
        _x(_scope, x + 1);
      });
  }),
  _x = _$.state(3, (_scope, x) => {
    _$.data(_scope[0], x), _x_effect(_scope);
  });
init();

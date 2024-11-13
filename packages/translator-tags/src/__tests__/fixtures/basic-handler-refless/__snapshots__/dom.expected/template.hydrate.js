// size: 107 (min) 89 (brotli)
const _data = _$.state(2, (_scope, data) => _$.data(_scope[1], data));
_$.effect("a0", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _data(_scope, 1);
  }),
),
  init();

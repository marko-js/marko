// size: 106 (min) 87 (brotli)
const _data = _$.state(2, (_scope, data) => _$.data(_scope[1], data));
_$.effect("b", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _data(_scope, 1);
  }),
),
  init();

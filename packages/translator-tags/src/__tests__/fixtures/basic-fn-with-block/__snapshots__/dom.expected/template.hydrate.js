// size: 126 (min) 107 (brotli)
const _count_effect = _$.effect("a0", (_scope, { 2: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(2, (_scope, count) => {
    _$.data(_scope[1], count), _count_effect(_scope);
  });
init();

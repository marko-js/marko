// size: 243 (min) 126 (brotli)
const _count_effect = _$.effect("a0", (_scope, { 6: count }) => {
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 2);
    }),
      _$.on(_scope[2], "click", function () {
        _count(_scope, 3 * count);
      }),
      _$.on(_scope[4], "click", function () {
        _count(_scope, count ** 3);
      });
  }),
  _count = _$.state(6, (_scope, count) => {
    _$.data(_scope[1], count),
      _$.data(_scope[3], count),
      _$.data(_scope[5], count),
      _count_effect(_scope);
  });
init();

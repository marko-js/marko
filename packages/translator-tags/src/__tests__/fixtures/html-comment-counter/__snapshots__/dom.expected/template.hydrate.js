// size: 162 (min) 129 (brotli)
const _count_effect = _$.effect("a0", (_scope, { 3: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(3, (_scope, count) => {
    _$.data(_scope[1], count),
      _$.data(_scope[2], `${count} + ${count} = ${count + count}`),
      _count_effect(_scope);
  });
init();

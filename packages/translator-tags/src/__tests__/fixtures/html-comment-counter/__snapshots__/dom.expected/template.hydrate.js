// size: 182 (min) 130 (brotli)
const _count_effect = _$.effect("a0", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 3: count } = _scope;
        return function () {
          _count(_scope, count + 1);
        };
      })(_scope),
    ),
  ),
  _count = _$.state(3, (_scope, count) => {
    _$.data(_scope[1], count),
      _$.data(_scope[2], `${count} + ${count} = ${count + count}`),
      _count_effect(_scope);
  });
init();

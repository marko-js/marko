// size: 318 (min) 137 (brotli)
const _count_effect = _$.effect("b", (_scope) => {
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 6: count } = _scope;
        return function () {
          _count(_scope, count + 2);
        };
      })(_scope),
    ),
      _$.on(
        _scope[2],
        "click",
        ((_scope) => {
          const { 6: count } = _scope;
          return function () {
            _count(_scope, 3 * count);
          };
        })(_scope),
      ),
      _$.on(
        _scope[4],
        "click",
        ((_scope) => {
          const { 6: count } = _scope;
          return function () {
            _count(_scope, count ** 3);
          };
        })(_scope),
      );
  }),
  _count = _$.state(6, (_scope, count) => {
    _$.data(_scope[1], count),
      _$.data(_scope[3], count),
      _$.data(_scope[5], count),
      _count_effect(_scope);
  });
init();

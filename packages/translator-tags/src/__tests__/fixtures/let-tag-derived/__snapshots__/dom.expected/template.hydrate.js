// size: 140 (min) 126 (brotli)
const _b_effect = _$.effect("b", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 6: b } = _scope;
        return () => (_b(_scope, b + 1), b);
      })(_scope),
    ),
  ),
  _b = _$.state(6, (_scope, b) => {
    _$.data(_scope[2], b), _b_effect(_scope);
  });
init();

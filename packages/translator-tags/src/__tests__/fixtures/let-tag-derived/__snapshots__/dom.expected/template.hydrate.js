// size: 122 (min) 111 (brotli)
const _b_effect = _$.effect("a0", (_scope, { 6: b }) =>
    _$.on(_scope[0], "click", () => (_b(_scope, b + 1), b)),
  ),
  _b = _$.state(6, (_scope, b) => {
    _$.data(_scope[2], b), _b_effect(_scope);
  });
init();

// size: 224 (min) 136 (brotli)
const _lastCount2 = _$.state(6, (_scope, lastCount2) =>
    _$.data(_scope[3], lastCount2),
  ),
  _lastCount = _$.state(5, (_scope, lastCount) =>
    _$.data(_scope[2], lastCount),
  ),
  _clickCount_effect = _$.effect("a0", (_scope, { 4: clickCount }) =>
    _$.on(_scope[0], "click", function () {
      const last = _lastCount(
        _scope,
        (_clickCount(_scope, clickCount + 1), clickCount),
      );
      _lastCount2(_scope, last);
    }),
  ),
  _clickCount = _$.state(4, (_scope, clickCount) => {
    _$.data(_scope[1], clickCount), _clickCount_effect(_scope);
  });
init();

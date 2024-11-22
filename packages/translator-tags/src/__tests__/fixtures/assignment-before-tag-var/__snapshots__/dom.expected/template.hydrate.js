// size: 189 (min) 129 (brotli)
const _lastClickCount = _$.state(4, (_scope, lastClickCount) =>
    _$.data(_scope[2], lastClickCount),
  ),
  _clickCount_effect = _$.effect("b", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 3: clickCount } = _scope;
        return function () {
          _lastClickCount(_scope, clickCount),
            _clickCount(_scope, clickCount + 1);
        };
      })(_scope),
    ),
  ),
  _clickCount = _$.state(3, (_scope, clickCount) => {
    _$.data(_scope[1], clickCount), _clickCount_effect(_scope);
  });
init();

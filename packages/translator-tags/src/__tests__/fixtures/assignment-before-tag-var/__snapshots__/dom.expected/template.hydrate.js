// size: 170 (min) 117 (brotli)
const _lastClickCount = _$.state(4, (_scope, lastClickCount) =>
    _$.data(_scope[2], lastClickCount),
  ),
  _clickCount_effect = _$.effect("a0", (_scope, { 3: clickCount }) =>
    _$.on(_scope[0], "click", function () {
      _lastClickCount(_scope, clickCount), _clickCount(_scope, clickCount + 1);
    }),
  ),
  _clickCount = _$.state(3, (_scope, clickCount) => {
    _$.data(_scope[1], clickCount), _clickCount_effect(_scope);
  });
init();

// size: 126 (min) 110 (brotli)
const _clickCount_effect = _$.effect("a0", (_scope, { 2: clickCount }) =>
    _$.on(
      _scope[0],
      "click",
      clickCount <= 1 &&
        (() => {
          _clickCount(_scope, clickCount + 1);
        }),
    ),
  ),
  _clickCount = _$.state(2, (_scope, clickCount) => {
    _$.data(_scope[1], clickCount), _clickCount_effect(_scope);
  });
init();

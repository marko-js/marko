// size: 155 (min) 107 (brotli)
const _clickCount_effect = _$.effect("a0", (_scope, { 1: clickCount }) => {
    (document.getElementById("button").textContent = clickCount),
      _$.on(_scope[0], "click", function () {
        _clickCount(_scope, clickCount + 1);
      });
  }),
  _clickCount = _$.state(1, (_scope) => _clickCount_effect(_scope));
init();

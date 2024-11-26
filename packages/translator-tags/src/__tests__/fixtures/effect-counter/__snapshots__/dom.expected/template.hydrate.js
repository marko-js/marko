// size: 192 (min) 120 (brotli)
const _clickCount_effect = _$.effect("a0", (_scope) => {
    const { 1: clickCount } = _scope;
    (document.getElementById("button").textContent = clickCount),
      _$.on(
        _scope[0],
        "click",
        ((_scope) => {
          const { 1: clickCount } = _scope;
          return function () {
            _clickCount(_scope, clickCount + 1);
          };
        })(_scope),
      );
  }),
  _clickCount = _$.state(1, (_scope, clickCount) => _clickCount_effect(_scope));
init();

// size: 131 (min) 116 (brotli)
const _clickCount_effect = effect("a0", (_scope) =>
    on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 2: clickCount } = _scope;
        return function () {
          _clickCount(_scope, clickCount + 1);
        };
      })(_scope),
    ),
  ),
  _clickCount = state(2, (_scope, clickCount) => {
    data(_scope[1], clickCount), _clickCount_effect(_scope);
  });
init();

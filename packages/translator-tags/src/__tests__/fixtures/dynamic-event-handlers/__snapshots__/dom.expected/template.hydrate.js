// size: 159 (min) 121 (brotli)
const _clickCount_effect = _$.effect("b", (_scope) => {
    const { 2: clickCount } = _scope;
    _$.on(
      _scope[0],
      "click",
      clickCount <= 1 &&
        ((_scope) => {
          const { 2: clickCount } = _scope;
          return () => {
            _clickCount(_scope, clickCount + 1);
          };
        })(_scope),
    );
  }),
  _clickCount = _$.state(2, (_scope, clickCount) => {
    _$.data(_scope[1], clickCount), _clickCount_effect(_scope);
  });
init();

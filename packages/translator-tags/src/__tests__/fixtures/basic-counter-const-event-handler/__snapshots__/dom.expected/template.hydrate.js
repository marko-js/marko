// size: 211 (min) 142 (brotli)
const _increment = _$.register("a0", (_scope) => {
    const { 2: clickCount } = _scope;
    return function () {
      _clickCount(_scope, clickCount + 1);
    };
  }),
  _increment2_effect = _$.effect("a1", (_scope) => {
    const { 3: increment } = _scope;
    _$.on(_scope[0], "click", increment);
  }),
  _increment2 = _$.value(3, (_scope, increment) => _increment2_effect(_scope)),
  _clickCount = _$.state(2, (_scope, clickCount) => {
    _$.data(_scope[1], clickCount), _increment2(_scope, _increment(_scope));
  });
init();

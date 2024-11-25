// size: 220 (min) 154 (brotli)
const _myObj = _$.value(4, (_scope, myObj) =>
    _$.data(_scope[0], JSON.stringify(myObj)),
  ),
  _x_effect = _$.effect("a0", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 3: x } = _scope;
        return function () {
          _x(_scope, x + 1);
        };
      })(_scope),
    ),
  ),
  _x = _$.state(3, (_scope, x) => {
    _$.data(_scope[2], x),
      _x_effect(_scope),
      _myObj(_scope, { foo: 1, bar: x + 1 });
  });
init();

// size: 200 (min) 152 (brotli)
const _myObj = _$.value(4, (_scope, myObj) =>
    _$.data(_scope[0], JSON.stringify(myObj)),
  ),
  _x_effect = _$.effect("a0", (_scope, { 3: x }) =>
    _$.on(_scope[1], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(3, (_scope, x) => {
    _$.data(_scope[2], x),
      _myObj(_scope, { foo: 1, bar: x + 1 }),
      _x_effect(_scope);
  });
init();

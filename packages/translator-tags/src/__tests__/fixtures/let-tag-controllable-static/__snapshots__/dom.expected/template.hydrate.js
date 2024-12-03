// size: 243 (min) 160 (brotli)
const _valueChange = _$.register(
    "a0",
    (_scope) =>
      function (newValue) {
        _x(_scope, newValue + 1);
      },
  ),
  _y_effect = _$.effect("a1", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 4: y } = _scope;
        return function () {
          _y(_scope, y + 1);
        };
      })(_scope),
    ),
  ),
  _y = _$.state(4, (_scope, y) => {
    _$.data(_scope[2], y), _y_effect(_scope);
  }),
  _x = _$.state(3, (_scope, x) => {
    _$.data(_scope[1], x), _y(_scope, x, _valueChange(_scope));
  });
init();

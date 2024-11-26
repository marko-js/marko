// size: 288 (min) 176 (brotli)
_$.register(
  "a0",
  (_scope) =>
    function (newValue) {
      _x(_scope, newValue + 1);
    },
);
const _expr_handler_y_effect = _$.effect("a1", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 4: handler, 5: y } = _scope;
        return function () {
          _y(_scope, y + 1, handler);
        };
      })(_scope),
    ),
  ),
  _expr_handler_y = _$.intersection(2, (_scope) => {
    _expr_handler_y_effect(_scope);
  }),
  _y = _$.state(
    5,
    (_scope, y) => _$.data(_scope[2], y),
    () => _expr_handler_y,
  ),
  _x = _$.state(
    3,
    (_scope, x) => {
      _$.data(_scope[1], x), _y(_scope, x, _scope[4]);
    },
    () => _y,
  );
init();

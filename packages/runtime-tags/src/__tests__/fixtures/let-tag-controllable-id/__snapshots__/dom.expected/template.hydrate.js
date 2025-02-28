// size: 284 (min) 180 (brotli)
const _expr_x_handler = _$.intersection(5, (_scope) => {
    const { 3: x, 4: handler } = _scope;
    _y(_scope, x, handler);
  }),
  _y_effect = _$.effect("a1", (_scope, { 6: y }) =>
    _$.on(_scope[0], "click", function () {
      _y(_scope, y + 1);
    }),
  ),
  _y = _$.state(6, (_scope, y) => {
    _$.data(_scope[2], y), _y_effect(_scope);
  }),
  _x = _$.state(3, (_scope, x) => {
    _$.data(_scope[1], x), _expr_x_handler(_scope);
  });
_$.register("a0", function (_scope) {
  return function (newValue) {
    _x(_scope, newValue + 1);
  };
}),
  init();

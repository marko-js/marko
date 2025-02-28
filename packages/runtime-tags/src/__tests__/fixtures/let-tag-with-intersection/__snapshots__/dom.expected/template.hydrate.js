// size: 318 (min) 176 (brotli)
const _expr_y_z = _$.intersection(8, (_scope) => {
    const { 6: y, 7: z } = _scope;
    _a(_scope, y + z);
  }),
  _a = _$.value(9, (_scope, a) => _$.data(_scope[4], a)),
  _z = _$.value(7, (_scope, z) => {
    _$.data(_scope[3], z), _expr_y_z(_scope);
  }),
  _y = _$.value(6, (_scope, y) => {
    _$.data(_scope[2], y), _expr_y_z(_scope);
  }),
  _x_effect = _$.effect("a0", (_scope, { 5: x }) =>
    _$.on(_scope[0], "click", () => (_x(_scope, x + 1), x)),
  ),
  _x = _$.state(5, (_scope, x) => {
    _$.data(_scope[1], x),
      _y(_scope, x + 1),
      _z(_scope, x + 2),
      _x_effect(_scope);
  });
init();

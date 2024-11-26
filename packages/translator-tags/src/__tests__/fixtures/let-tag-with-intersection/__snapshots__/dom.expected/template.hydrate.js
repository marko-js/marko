// size: 368 (min) 200 (brotli)
const _expr_y_z = _$.intersection(2, (_scope) => {
    const { 6: y, 7: z } = _scope;
    _a(_scope, y + z);
  }),
  _a = _$.value(8, (_scope, a) => _$.data(_scope[4], a)),
  _z = _$.value(
    7,
    (_scope, z) => _$.data(_scope[3], z),
    () => _expr_y_z,
  ),
  _y = _$.value(
    6,
    (_scope, y) => _$.data(_scope[2], y),
    () => _expr_y_z,
  ),
  _x_effect = _$.effect("a0", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 5: x } = _scope;
        return () => (_x(_scope, x + 1), x);
      })(_scope),
    ),
  ),
  _x = _$.state(
    5,
    (_scope, x) => {
      _$.data(_scope[1], x),
        _x_effect(_scope),
        _y(_scope, x + 1),
        _z(_scope, x + 2);
    },
    () => _$.intersections([_y, _z]),
  );
init();

// size: 224 (min) 144 (brotli)
const _expr_x_y_effect = _$.effect("a0", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 3: x, 4: y } = _scope;
        return () => _x(_scope, _y(_scope, x + y));
      })(_scope),
    ),
  ),
  _expr_x_y = _$.intersection(2, (_scope) => {
    _expr_x_y_effect(_scope);
  }),
  _y = _$.state(
    4,
    (_scope, y) => _$.data(_scope[2], y),
    () => _expr_x_y,
  ),
  _x = _$.state(
    3,
    (_scope, x) => _$.data(_scope[1], x),
    () => _expr_x_y,
  );
init();

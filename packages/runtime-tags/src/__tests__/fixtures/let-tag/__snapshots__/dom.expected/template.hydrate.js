// size: 193 (min) 139 (brotli)
const _expr_x_y_effect = _$.effect("a0", (_scope, { 3: x, 4: y }) =>
    _$.on(_scope[0], "click", () => _x(_scope, _y(_scope, x + y))),
  ),
  _expr_x_y = _$.intersection(5, _expr_x_y_effect),
  _y = _$.state(4, (_scope, y) => {
    _$.data(_scope[2], y), _expr_x_y(_scope);
  }),
  _x = _$.state(3, (_scope, x) => {
    _$.data(_scope[1], x), _expr_x_y(_scope);
  });
init();

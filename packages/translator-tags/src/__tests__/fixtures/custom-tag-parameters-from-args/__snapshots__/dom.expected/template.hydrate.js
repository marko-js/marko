// size: 599 (min) 290 (brotli)
const _inputRenderBody_input = _$.dynamicTagAttrs(3, void 0, 1),
  _expr_Text_x_y = _$.intersection(
    3,
    (_scope) => {
      const { 6: x, 7: y } = _scope;
      _inputRenderBody_input(_scope, () => [x, y]);
    },
    () => _inputRenderBody_input,
  ),
  _expr_x_y_effect = _$.effect("d", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 6: x, 7: y } = _scope;
        return function () {
          _x(_scope, x + 1), _y(_scope, y + 1);
        };
      })(_scope),
    ),
  ),
  _expr_x_y = _$.intersection(2, (_scope) => {
    _expr_x_y_effect(_scope);
  }),
  _y = _$.state(
    7,
    (_scope, y) => _$.data(_scope[2], y),
    () => _$.intersections([_expr_x_y, _expr_Text_x_y]),
  ),
  _x = _$.state(
    6,
    (_scope, x) => _$.data(_scope[1], x),
    () => _$.intersections([_expr_x_y, _expr_Text_x_y]),
  ),
  _count2$customTagBody = _$.value(4, (_scope, count2) =>
    _$.data(_scope[1], count2),
  ),
  _count$customTagBody = _$.value(3, (_scope, count) =>
    _$.data(_scope[0], count),
  ),
  _params_2$customTagBody = _$.value(2, (_scope, _params_2) => {
    _count$customTagBody(_scope, _params_2[0]),
      _count2$customTagBody(_scope, _params_2[1]);
  });
_$.register(
  "c",
  _$.createRendererWithOwner(
    "<div>Counts: <!>,<!></div>",
    "Db%c%",
    void 0,
    void 0,
    () => _params_2$customTagBody,
  ),
),
  init();

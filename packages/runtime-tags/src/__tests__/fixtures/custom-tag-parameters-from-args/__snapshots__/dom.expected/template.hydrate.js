// size: 506 (min) 275 (brotli)
const _expr_input_content_x_y = _$.intersection(10, (_scope) => {
    const { 6: input_content, 7: x, 8: y } = _scope;
    _dynamicTag(_scope, input_content, () => [x, y]);
  }),
  _expr_x_y_effect = _$.effect("a0", (_scope, { 7: x, 8: y }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1), _y(_scope, y + 1);
    }),
  ),
  _expr_x_y = _$.intersection(9, (_scope) => {
    _expr_x_y_effect(_scope);
  }),
  _dynamicTag = _$.dynamicTag(3, 0, 0, 1),
  _y = _$.state(8, (_scope, y) => {
    _$.data(_scope[2], y), _expr_x_y(_scope), _expr_input_content_x_y(_scope);
  }),
  _x = _$.state(7, (_scope, x) => {
    _$.data(_scope[1], x), _expr_x_y(_scope), _expr_input_content_x_y(_scope);
  }),
  _count2$customTag_content = _$.value(4, (_scope, count2) =>
    _$.data(_scope[1], count2),
  ),
  _count$customTag_content = _$.value(3, (_scope, count) =>
    _$.data(_scope[0], count),
  ),
  _params_2$customTag_content = _$.value(2, (_scope, _params_2) => {
    _count$customTag_content(_scope, _params_2[0]),
      _count2$customTag_content(_scope, _params_2[1]);
  });
_$.registerContent(
  "b0",
  "<div>Counts: <!>,<!></div>",
  "Db%c%",
  0,
  () => _params_2$customTag_content,
),
  init();

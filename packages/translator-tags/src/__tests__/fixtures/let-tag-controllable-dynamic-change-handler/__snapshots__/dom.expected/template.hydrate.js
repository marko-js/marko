// size: 374 (min) 198 (brotli)
_$.register(
  "a0",
  (_scope) =>
    function (newValue) {
      _x(_scope, newValue + 1);
    },
);
const _expr_x_yChange = _$.intersection(2, (_scope) => {
    const { 4: x, 5: yChange } = _scope;
    _y(_scope, x, yChange);
  }),
  _y_effect = _$.effect("a1", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 6: y } = _scope;
        return function () {
          _y(_scope, y + 1);
        };
      })(_scope),
    ),
  ),
  _y = _$.state(6, (_scope, y) => {
    _$.data(_scope[2], y), _y_effect(_scope);
  }),
  _yChange2 = _$.state(5, 0, () => _expr_x_yChange),
  _x = _$.state(
    4,
    (_scope, x) => _$.data(_scope[1], x),
    () => _expr_x_yChange,
  );
_$.effect("a2", (_scope) =>
  _$.on(_scope[3], "click", function () {
    _yChange2(_scope, null);
  }),
),
  init();

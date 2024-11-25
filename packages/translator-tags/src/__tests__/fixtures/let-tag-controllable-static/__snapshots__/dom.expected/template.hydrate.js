// size: 281 (min) 171 (brotli)
_$.register(
  "a0",
  (_scope) =>
    function (newValue) {
      _x(_scope, newValue + 1);
    },
);
const _expr__y_change_y_effect = _$.effect("a1", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 4: _y_change, 5: y } = _scope;
        return function () {
          _y_change(y + 1);
        };
      })(_scope),
    ),
  ),
  _expr__y_change_y = _$.intersection(2, (_scope) => {
    _expr__y_change_y_effect(_scope);
  }),
  _y = _$.state(
    5,
    (_scope, y) => _$.data(_scope[2], y),
    () => _expr__y_change_y,
  ),
  _x = _$.state(
    3,
    (_scope, x) => {
      _$.data(_scope[1], x), _y(_scope, x, 1);
    },
    () => _y,
  );
init();

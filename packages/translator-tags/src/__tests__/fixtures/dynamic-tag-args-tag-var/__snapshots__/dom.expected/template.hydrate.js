// size: 305 (min) 182 (brotli)
const _tags0_input = _$.dynamicTagAttrs(2),
  _expr_Text_x = _$.intersection(
    2,
    (_scope) => {
      const { 4: x } = _scope;
      _tags0_input(_scope, () => x);
    },
    () => _tags0_input,
  );
_$.registerBoundSignal(
  "b",
  _$.value(5, (_scope, y) => _$.data(_scope[3], y)),
);
const _x_effect = _$.effect("c", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 4: x } = _scope;
        return function () {
          _x(_scope, x + 1);
        };
      })(_scope),
    ),
  ),
  _x = _$.state(
    4,
    (_scope, x) => {
      _$.data(_scope[1], x), _x_effect(_scope);
    },
    () => _expr_Text_x,
  );
init();

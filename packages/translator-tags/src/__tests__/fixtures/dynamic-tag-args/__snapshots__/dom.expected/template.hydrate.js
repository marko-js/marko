// size: 254 (min) 176 (brotli)
const _tags0_input = _$.dynamicTagAttrs(2, void 0, 1),
  _expr_Text_x = _$.intersection(
    2,
    (_scope) => {
      const { 3: x } = _scope;
      _tags0_input(_scope, () => [x, "foo"]);
    },
    () => _tags0_input,
  ),
  _x_effect = _$.effect("b", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 3: x } = _scope;
        return function () {
          _x(_scope, x + 1);
        };
      })(_scope),
    ),
  ),
  _x = _$.state(
    3,
    (_scope, x) => {
      _$.data(_scope[1], x), _x_effect(_scope);
    },
    () => _expr_Text_x,
  );
init();

// size: 218 (min) 164 (brotli)
const _tags0_input = _$.dynamicTagAttrs(2),
  _expr_Text_x = _$.intersection(
    2,
    (_scope) => {
      const { 3: x } = _scope;
      _tags0_input(_scope, () => x);
    },
    () => _tags0_input,
  ),
  _x_effect = _$.effect("b0", (_scope, { 3: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(
    3,
    (_scope, x) => {
      _$.data(_scope[1], x), _x_effect(_scope);
    },
    () => _expr_Text_x,
  );
init();

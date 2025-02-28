// size: 352 (min) 226 (brotli)
const _expr_input_extra_x = _$.intersection(6, (_scope) => {
    const { 4: input_extra, 5: x } = _scope;
    _$.tagVarSignal(_scope, x + input_extra);
  }),
  _x_effect = _$.effect("a0", (_scope, { 5: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(5, (_scope, x) => {
    _$.data(_scope[1], x), _expr_input_extra_x(_scope), _x_effect(_scope);
  }),
  _expr_name_data = _$.intersection(
    5,
    (_scope) => {
      const { 3: name, 4: data } = _scope;
      _message(_scope, `${name} ${data}`);
    },
    1,
    1,
  ),
  _message = _$.value(6, (_scope, message) => _$.data(_scope[2], message));
_$.registerBoundSignal(
  "b0",
  _$.value(4, (_scope, data) => _expr_name_data(_scope)),
),
  init();

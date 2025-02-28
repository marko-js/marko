// size: 207 (min) 150 (brotli)
const _expr_value_dummy = _$.intersection(5, (_scope) => {
    const { 3: value, 4: dummy } = _scope;
    _$.data(_scope[0], value);
  }),
  _value_ = _$.value(3, (_scope, value) => _expr_value_dummy(_scope)),
  _count_effect = _$.effect("b0", (_scope, { 2: count }) =>
    _$.on(_scope[1], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(2, (_scope, count) => {
    _value_(_scope[0], count), _count_effect(_scope);
  });
init();

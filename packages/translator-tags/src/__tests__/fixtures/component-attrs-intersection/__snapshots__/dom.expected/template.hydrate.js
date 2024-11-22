// size: 243 (min) 167 (brotli)
const _expr_value_dummy = _$.intersection(2, (_scope) => {
    const { 3: value, 4: dummy } = _scope;
    _$.data(_scope[0], value);
  }),
  _value_ = _$.value(3, 0, () => _expr_value_dummy),
  _count_effect = _$.effect("c", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 2: count } = _scope;
        return function () {
          _count(_scope, count + 1);
        };
      })(_scope),
    ),
  ),
  _count = _$.state(
    2,
    (_scope, count) => {
      _count_effect(_scope), _value_(_scope[0], count);
    },
    () => _$.inChild(0, _value_),
  );
init();

// size: 371 (min) 190 (brotli)
const _expr_count_multiplier = _$.intersection(2, (_scope) => {
    const { 4: count, 5: multiplier } = _scope;
    _multipliedCount(_scope, count * multiplier);
  }),
  _multipliedCount = _$.value(6, (_scope, multipliedCount) =>
    _$.data(_scope[3], multipliedCount),
  ),
  _multiplier_effect = _$.effect("a0", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 5: multiplier } = _scope;
        return function () {
          _multiplier(_scope, multiplier + 1);
        };
      })(_scope),
    ),
  ),
  _multiplier = _$.state(
    5,
    (_scope, multiplier) => {
      _$.data(_scope[1], multiplier), _multiplier_effect(_scope);
    },
    () => _expr_count_multiplier,
  ),
  _count_effect = _$.effect("a1", (_scope) =>
    _$.on(
      _scope[2],
      "click",
      ((_scope) => {
        const { 4: count } = _scope;
        return function () {
          _count(_scope, count + 1);
        };
      })(_scope),
    ),
  ),
  _count = _$.state(
    4,
    (_scope, count) => _count_effect(_scope),
    () => _expr_count_multiplier,
  );
init();

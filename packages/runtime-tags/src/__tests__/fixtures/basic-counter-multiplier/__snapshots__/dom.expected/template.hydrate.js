// size: 323 (min) 179 (brotli)
const _expr_count_multiplier = _$.intersection(6, (_scope) => {
    const { 4: count, 5: multiplier } = _scope;
    _multipliedCount(_scope, count * multiplier);
  }),
  _multipliedCount = _$.value(7, (_scope, multipliedCount) =>
    _$.data(_scope[3], multipliedCount),
  ),
  _multiplier_effect = _$.effect("a0", (_scope, { 5: multiplier }) =>
    _$.on(_scope[0], "click", function () {
      _multiplier(_scope, multiplier + 1);
    }),
  ),
  _multiplier = _$.state(5, (_scope, multiplier) => {
    _$.data(_scope[1], multiplier),
      _expr_count_multiplier(_scope),
      _multiplier_effect(_scope);
  }),
  _count_effect = _$.effect("a1", (_scope, { 4: count }) =>
    _$.on(_scope[2], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(4, (_scope) => {
    _expr_count_multiplier(_scope), _count_effect(_scope);
  });
init();

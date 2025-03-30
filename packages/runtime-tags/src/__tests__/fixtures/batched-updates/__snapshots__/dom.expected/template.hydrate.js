// size: 207 (min) 144 (brotli)
const _expr_a_b_effect = _$.effect("a0", (_scope, { 2: a, 3: b }) =>
    _$.on(_scope[0], "click", function () {
      _a(_scope, a + 1), _b(_scope, b + 1);
    }),
  ),
  _expr_a_b = _$.intersection(4, (_scope) => {
    const { 2: a, 3: b } = _scope;
    _$.data(_scope[1], a + b), _expr_a_b_effect(_scope);
  }),
  _b = _$.state(3, (_scope) => _expr_a_b(_scope)),
  _a = _$.state(2, (_scope) => _expr_a_b(_scope));
init();

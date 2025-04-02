// size: 171 (min) 143 (brotli)
const _expr_a_b_effect = _$.effect("a0", (_scope, { 2: a, 3: b }) =>
    _$.on(_scope[0], "click", function () {
      _a(
        _scope,
        a.map((a) => b),
      );
    }),
  ),
  _expr_a_b = _$.intersection(4, _expr_a_b_effect),
  _a = _$.state(2, (_scope, a) => {
    _$.data(_scope[1], a.join("")), _expr_a_b(_scope);
  });
init();

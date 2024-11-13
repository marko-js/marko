// size: 230 (min) 156 (brotli)
const _expr_a_b_effect = _$.effect("a0", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 2: a, 3: b } = _scope;
        return function () {
          _a(
            _scope,
            a.map(
              ((_scope) => {
                const { 3: b } = _scope;
                return (a) => b;
              })(_scope),
            ),
          );
        };
      })(_scope),
    ),
  ),
  _expr_a_b = _$.intersection(2, (_scope) => {
    _expr_a_b_effect(_scope);
  }),
  _a = _$.state(
    2,
    (_scope, a) => _$.data(_scope[1], a.join("")),
    () => _expr_a_b,
  );
init();

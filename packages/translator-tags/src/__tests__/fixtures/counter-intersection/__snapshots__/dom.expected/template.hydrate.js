// size: 263 (min) 162 (brotli)
const _expr_a_b = _$.intersection(2, (_scope) => {
    const { 5: a, 6: b } = _scope;
    _$.data(_scope[4], a + b);
  }),
  _b = _$.state(
    6,
    (_scope, b) => _$.data(_scope[3], b),
    () => _expr_a_b,
  ),
  _a = _$.state(
    5,
    (_scope, a) => _$.data(_scope[1], a),
    () => _expr_a_b,
  );
_$.effect("b", (_scope) => {
  _$.on(_scope[0], "click", function () {
    _a(_scope, 10);
  }),
    _$.on(_scope[2], "click", function () {
      _b(_scope, 5);
    });
}),
  init();

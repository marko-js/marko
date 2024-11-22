// size: 297 (min) 183 (brotli)
const _expr_input_count = _$.intersection(2, (_scope) => {
    const { 3: input, 4: count } = _scope;
    _$.data(_scope[1], input.format(count));
  }),
  _count_effect = _$.effect("e", (_scope) =>
    _$.on(
      _scope[0],
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
    () => _expr_input_count,
  );
_$.register("d", function (n) {
  return "$" + n.toFixed(2);
}),
  _$.register("c", (n) => "$" + n.toFixed(2)),
  init();

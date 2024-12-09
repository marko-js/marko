// size: 230 (min) 152 (brotli)
const _x_effect = _$.effect("a0", (_scope, { 2: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(
    2,
    (_scope, x) => {
      _$.data(_scope[1], x), _x_effect(_scope), _$.tagVarSignal(_scope, x);
    },
    () => _$.tagVarSignal,
  );
_$.registerBoundSignal(
  "b0",
  _$.value(2, (_scope, data) => _$.data(_scope[1], data)),
),
  init();

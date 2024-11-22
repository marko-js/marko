// size: 248 (min) 153 (brotli)
const _x_effect = _$.effect("d", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 2: x } = _scope;
        return function () {
          _x(_scope, x + 1);
        };
      })(_scope),
    ),
  ),
  _x = _$.state(
    2,
    (_scope, x) => {
      _$.data(_scope[1], x), _x_effect(_scope), _$.tagVarSignal(_scope, x);
    },
    () => _$.tagVarSignal,
  );
_$.registerBoundSignal(
  "c",
  _$.value(2, (_scope, data) => _$.data(_scope[1], data)),
),
  init();

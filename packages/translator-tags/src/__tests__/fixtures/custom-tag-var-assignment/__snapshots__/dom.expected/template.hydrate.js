// size: 351 (min) 182 (brotli)
_$.register(
  "a0",
  (_scope) =>
    function (_new_x) {
      _x(_scope, _new_x);
    },
);
const _x_effect = _$.effect("a1", (_scope) =>
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
_$.registerBoundSignal("b0", (_scope, count) => {}),
  _$.effect("b1", (_scope) =>
    _$.on(_scope[1], "click", function () {
      _$.tagVarSignalChange(_scope[0], 0);
    }),
  ),
  init();

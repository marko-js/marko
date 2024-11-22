// size: 390 (min) 233 (brotli)
const _i$forBody = _$.value(3, (_scope, i) => _$.data(_scope[1], i)),
  _params_2$forBody = _$.value(2, (_scope, _params_2) =>
    _i$forBody(_scope, _params_2[0]),
  ),
  _num$forBody_effect = _$.effect("b", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const {
          _: { 1: num },
        } = _scope;
        return function () {
          _num(_scope._, num + 1);
        };
      })(_scope),
    ),
  ),
  _num$forBody = _$.closure(1, (_scope, num) => _num$forBody_effect(_scope)),
  _forBody = _$.register(
    "c",
    _$.createRenderer(
      "<button> </button>",
      " D ",
      void 0,
      () => [_num$forBody],
      () => _params_2$forBody,
    ),
  ),
  _for = _$.loopTo(0, _forBody),
  _num = _$.state(
    1,
    (_scope, num) => _for(_scope, [num, 0, 1]),
    () => _$.intersections([_for, _$.inLoopScope(_num$forBody, 0)]),
  );
init();

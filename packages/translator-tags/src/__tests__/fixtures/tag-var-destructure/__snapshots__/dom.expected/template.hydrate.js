// size: 461 (min) 224 (brotli)
function noop(_) {}
_$.register("b", noop);
const _e = _$.state(10, (_scope, e) => _$.data(_scope[5], JSON.stringify(e))),
  _d = _$.state(9, (_scope, d) => _$.data(_scope[4], d)),
  _c = _$.state(8, (_scope, c) => _$.data(_scope[3], JSON.stringify(c))),
  _b = _$.state(7, (_scope, b) => _$.data(_scope[2], b)),
  _a = _$.state(6, (_scope, a) => _$.data(_scope[1], a));
_$.effect("c", (_scope) =>
  _$.on(_scope[0], "click", function () {
    let local, _a2, _b2, _c2, _d2, _e2;
    ({
      a: _a2,
      _b: { _b: _b2 },
      local: local,
      ..._c2
    } = { a: 1, _b: { _b: 2 }, local: 3, c: 4 }),
      _a(_scope, _a2),
      _b(_scope, _b2),
      _c(_scope, _c2),
      ([
        {
          arr: [local, _d2, , ..._e2],
        },
      ] = [{ arr: [6, 7, 8, 9] }]),
      _d(_scope, _d2),
      _e(_scope, _e2);
  }),
),
  init();

// size: 490 (min) 271 (brotli)
const noop = _noop,
  _e = _$.state(10, (_scope, e) => _$.data(_scope[5], JSON.stringify(e))),
  _d = _$.state(9, (_scope, d) => _$.data(_scope[4], d)),
  _c = _$.state(8, (_scope, c) => _$.data(_scope[3], JSON.stringify(c))),
  _b = _$.state(7, (_scope, b) => _$.data(_scope[2], b)),
  _a = _$.state(6, (_scope, a) => _$.data(_scope[1], a));
function _noop(_) {}
_$.effect("a1", (_scope) =>
  _$.on(_scope[0], "click", function () {
    let local;
    var _result2, _a2, _b2, _c2, _result, _d2, _e2;
    (_result2 = { a: 1, _b: { _b: 2 }, local: 3, c: 4 }),
      ({
        a: _a2,
        _b: { _b: _b2 },
        local: local,
        ..._c2
      } = _result2),
      _a(_scope, _a2),
      _b(_scope, _b2),
      _c(_scope, _c2),
      noop(
        ((_result = [{ arr: [6, 7, 8, 9] }]),
        ([
          {
            arr: [local, _d2, , ..._e2],
          },
        ] = _result),
        _d(_scope, _d2),
        _e(_scope, _e2),
        _result),
      );
  }),
),
  _$.register("a0", _noop),
  init();

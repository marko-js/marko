// size: 478 (min) 179 (brotli)
const _count7_effect = _$.effect("a0", (_scope, { 11: _count3 }) =>
    _$.on(_scope[6], "click", function () {
      _count7(_scope, _count3 + 1);
    }),
  ),
  _count7 = _$.state(11, (_scope, _count3) => {
    _$.data(_scope[7], _count3), _count7_effect(_scope);
  }),
  _count6_effect = _$.effect("a1", (_scope, { 10: _count2 }) =>
    _$.on(_scope[4], "click", function () {
      _count6(_scope, _count2 + 1);
    }),
  ),
  _count6 = _$.state(10, (_scope, _count2) => {
    _$.data(_scope[5], _count2), _count6_effect(_scope);
  }),
  _count5_effect = _$.effect("a2", (_scope, { 9: _count }) =>
    _$.on(_scope[2], "click", function () {
      _count5(_scope, _count + 1);
    }),
  ),
  _count5 = _$.state(9, (_scope, _count) => {
    _$.data(_scope[3], _count), _count5_effect(_scope);
  }),
  _count4_effect = _$.effect("a3", (_scope, { 8: count }) =>
    _$.on(_scope[0], "click", function () {
      _count4(_scope, count + 1);
    }),
  ),
  _count4 = _$.state(8, (_scope, count) => {
    _$.data(_scope[1], count), _count4_effect(_scope);
  });
init();

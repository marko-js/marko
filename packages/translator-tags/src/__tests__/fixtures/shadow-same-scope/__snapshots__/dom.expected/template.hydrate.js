// size: 558 (min) 169 (brotli)
const _count4_effect = _$.effect("a0", (_scope) =>
    _$.on(
      _scope[6],
      "click",
      ((_scope) => {
        const { 11: _count3 } = _scope;
        return function () {
          _count4(_scope, _count3 + 1);
        };
      })(_scope),
    ),
  ),
  _count4 = _$.state(11, (_scope, _count3) => {
    _$.data(_scope[7], _count3), _count4_effect(_scope);
  }),
  _count3_effect = _$.effect("a1", (_scope) =>
    _$.on(
      _scope[4],
      "click",
      ((_scope) => {
        const { 10: _count2 } = _scope;
        return function () {
          _count3(_scope, _count2 + 1);
        };
      })(_scope),
    ),
  ),
  _count3 = _$.state(10, (_scope, _count2) => {
    _$.data(_scope[5], _count2), _count3_effect(_scope);
  }),
  _count2_effect = _$.effect("a2", (_scope) =>
    _$.on(
      _scope[2],
      "click",
      ((_scope) => {
        const { 9: _count } = _scope;
        return function () {
          _count2(_scope, _count + 1);
        };
      })(_scope),
    ),
  ),
  _count2 = _$.state(9, (_scope, _count) => {
    _$.data(_scope[3], _count), _count2_effect(_scope);
  }),
  _count_effect = _$.effect("a3", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 8: count } = _scope;
        return function () {
          _count(_scope, count + 1);
        };
      })(_scope),
    ),
  ),
  _count = _$.state(8, (_scope, count) => {
    _$.data(_scope[1], count), _count_effect(_scope);
  });
init();

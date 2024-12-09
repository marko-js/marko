// size: 379 (min) 205 (brotli)
const _setup$ifBody2 = (_scope) => {
    _$.data(_scope[0], _scope.$global.x);
  },
  _ifBody2 = _$.register(
    "a0",
    _$.createRenderer("<span class=hidden> </span>", "D ", _setup$ifBody2),
  ),
  _setup$ifBody = (_scope) => {
    _$.data(_scope[0], _scope.$global.x);
  },
  _ifBody = _$.register(
    "a1",
    _$.createRenderer("<span> </span>", "D ", _setup$ifBody),
  ),
  _if2 = _$.conditional(1, 0),
  _if = _$.conditional(0, 0),
  _show_effect = _$.effect("a2", (_scope, { 3: show }) =>
    _$.on(_scope[2], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(3, (_scope, show) => {
    _show_effect(_scope),
      _if(_scope, show ? _ifBody : null),
      _if2(_scope, show ? null : _ifBody2);
  });
init();

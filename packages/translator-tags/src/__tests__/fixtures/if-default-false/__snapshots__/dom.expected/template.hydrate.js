// size: 210 (min) 155 (brotli)
const _ifBody = _$.register("a0", _$.createRenderer("hi", "")),
  _if = _$.conditional(1, 0),
  _show_effect = _$.effect("a1", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 2: show } = _scope;
        return function () {
          _show(_scope, !show);
        };
      })(_scope),
    ),
  ),
  _show = _$.state(2, (_scope, show) => {
    _show_effect(_scope), _if(_scope, show ? _ifBody : null);
  });
init();

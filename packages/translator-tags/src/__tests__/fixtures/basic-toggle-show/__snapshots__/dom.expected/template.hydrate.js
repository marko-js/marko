// size: 212 (min) 144 (brotli)
const _ifBody = _$.register("b", _$.createRenderer("Hello!", "")),
  _if = _$.conditional(0, 0),
  _show_effect = _$.effect("c", (_scope) =>
    _$.on(
      _scope[1],
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

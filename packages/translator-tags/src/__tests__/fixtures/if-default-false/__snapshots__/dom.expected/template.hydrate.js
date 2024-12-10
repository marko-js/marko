// size: 190 (min) 142 (brotli)
const _ifBody = _$.register("a0", _$.createRenderer("hi", "")),
  _if = _$.conditional(1, 0),
  _show_effect = _$.effect("a1", (_scope, { 2: show }) =>
    _$.on(_scope[0], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(2, (_scope, show) => {
    _show_effect(_scope), _if(_scope, show ? _ifBody : null);
  });
init();

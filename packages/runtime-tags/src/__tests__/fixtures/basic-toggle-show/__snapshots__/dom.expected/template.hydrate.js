// size: 174 (min) 131 (brotli)
const _if_content = _$.createRenderer("Hello!", ""),
  _if = _$.conditional(0, _if_content),
  _show_effect = _$.effect("a0", (_scope, { 2: show }) =>
    _$.on(_scope[1], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(2, (_scope, show) => {
    _show_effect(_scope), _if(_scope, show ? 0 : 1);
  });
init();

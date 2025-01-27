// size: 208 (min) 145 (brotli)
const _if_content = _$.register(
    "a0",
    _$.createRenderer("<tr><td>Hi</td></tr>", ""),
  ),
  _if = _$.conditional(0, 0),
  _show_effect = _$.effect("a1", (_scope, { 2: show }) =>
    _$.on(_scope[1], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(2, (_scope, show) => {
    _show_effect(_scope), _if(_scope, show ? _if_content : null);
  });
init();

// size: 292 (min) 187 (brotli)
const _message$if_content = _$.conditionalClosure(3, 1, 0, (_scope, message) =>
    _$.data(_scope[0], message),
  ),
  _if_content = _$.createRenderer("<span> </span>", "D ", 0, 0, (_scope) =>
    _message$if_content._(_scope),
  ),
  _if = _$.conditional(1, _if_content),
  _message = _$.state(3, (_scope, message) => _message$if_content(_scope)),
  _show_effect = _$.effect("a0", (_scope, { 2: show }) =>
    _$.on(_scope[0], "click", function () {
      _message(_scope, "bye"), _show(_scope, !show);
    }),
  ),
  _show = _$.state(2, (_scope, show) => {
    _if(_scope, show ? 0 : 1), _show_effect(_scope);
  });
init();

// size: 283 (min) 184 (brotli)
const _message_text$if_content = _$.conditionalClosure(
    3,
    1,
    0,
    (_scope, message_text) => _$.data(_scope[0], message_text),
  ),
  _if_content = _$.createRenderer(" ", " ", 0, 0, (_scope) =>
    _message_text$if_content._(_scope),
  ),
  _if = _$.conditional(1, _if_content),
  _show = _$.state(4, (_scope, show) => _if(_scope, show ? 0 : 1)),
  _message_text = _$.value(3, _message_text$if_content),
  _message = _$.state(2, (_scope, message) =>
    _message_text(_scope, message?.text),
  );
_$.effect("a0", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _message(_scope, null), _show(_scope, !1);
  }),
),
  init();

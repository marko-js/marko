// size: 337 (min) 204 (brotli)
const _message_text$if_content = _$.closure(3, (_scope, message_text) =>
    _$.data(_scope[0], message_text),
  ),
  _if_content = _$.register(
    "a0",
    _$.createRenderer(" ", " ", void 0, () => [_message_text$if_content]),
  ),
  _if = _$.conditional(1, 0),
  _show = _$.state(
    4,
    (_scope, show) => _if(_scope, show ? _if_content : null),
    () => _if,
  ),
  _message_text = _$.value(3, 0, () =>
    _$.inConditionalScope(_message_text$if_content, 1),
  ),
  _message = _$.state(
    2,
    (_scope, message) => _message_text(_scope, message?.text),
    () => _message_text,
  );
_$.effect("a1", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _message(_scope, null), _show(_scope, !1);
  }),
),
  init();

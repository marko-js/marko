// size: 299 (min) 191 (brotli)
const _message$ifBody = _$.closure(2, (_scope, message) =>
    _$.data(_scope[0], message.text),
  ),
  _ifBody = _$.register(
    "a0",
    _$.createRenderer(" ", " ", void 0, () => [_message$ifBody]),
  ),
  _if = _$.conditional(1, 0),
  _show = _$.state(
    3,
    (_scope, show) => _if(_scope, show ? _ifBody : null),
    () => _if,
  ),
  _message = _$.state(2, 0, () => _$.inConditionalScope(_message$ifBody, 1));
_$.effect("a1", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _message(_scope, null), _show(_scope, !1);
  }),
),
  init();

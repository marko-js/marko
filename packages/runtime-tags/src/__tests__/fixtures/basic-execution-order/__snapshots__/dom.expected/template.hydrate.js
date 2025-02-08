// size: 310 (min) 197 (brotli)
const _message_text$if_content = _$.conditionalClosure(
    1,
    0,
    (_scope, message_text) => _$.data(_scope[0], message_text),
  ),
  _setup$if_content = (_scope) => {
    _message_text$if_content._(_scope, _scope._[3]);
  },
  _if_content = _$.createRenderer(" ", " ", _setup$if_content),
  _if = _$.conditional(1, _if_content),
  _show = _$.state(
    4,
    (_scope, show) => _if(_scope, show ? 0 : 1),
    () => _if,
  ),
  _message_text = _$.value(3, (_scope, message_text) =>
    _message_text$if_content(_scope, message_text),
  ),
  _message = _$.state(2, (_scope, message) =>
    _message_text(_scope, message?.text),
  );
_$.effect("a0", (_scope) =>
  _$.on(_scope[0], "click", function () {
    _message(_scope, null), _show(_scope, !1);
  }),
),
  init();

// size: 333 (min) 213 (brotli)
const _message$if_content = _$.conditionalClosure(
    1,
    () => _if_content,
    (_scope, message) => _$.data(_scope[0], message),
  ),
  _setup$if_content = (_scope) => {
    _message$if_content._(_scope, _scope._[3]);
  },
  _if_content = _$.register(
    "a0",
    _$.createRenderer("<span> </span>", "D ", _setup$if_content),
  ),
  _if = _$.conditional(1, 0),
  _message = _$.state(3, (_scope, message) =>
    _message$if_content(_scope, message),
  ),
  _show_effect = _$.effect("a1", (_scope, { 2: show }) =>
    _$.on(_scope[0], "click", function () {
      _message(_scope, "bye"), _show(_scope, !show);
    }),
  ),
  _show = _$.state(
    2,
    (_scope, show) => {
      _show_effect(_scope), _if(_scope, show ? _if_content : null);
    },
    () => _if,
  );
init();

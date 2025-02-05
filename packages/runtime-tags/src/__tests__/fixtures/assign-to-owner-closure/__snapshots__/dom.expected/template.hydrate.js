// size: 207 (min) 144 (brotli)
const _setup$if_content_effect = _$.effect("a0", (_scope) =>
    _$.on(_scope[0], "click", function () {
      _hide(_scope._, !0);
    }),
  ),
  _setup$if_content = (_scope) => {
    _setup$if_content_effect(_scope);
  },
  _if_content = _$.register(
    "a1",
    _$.createRenderer("<button></button>", " ", _setup$if_content),
  ),
  _if = _$.conditional(0, 0),
  _hide = _$.state(1, (_scope, hide) => _if(_scope, hide ? null : _if_content));
init();

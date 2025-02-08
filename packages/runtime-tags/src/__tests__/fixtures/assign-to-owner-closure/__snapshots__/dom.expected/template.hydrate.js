// size: 187 (min) 140 (brotli)
const _setup$if_content_effect = _$.effect("a0", (_scope) =>
    _$.on(_scope[0], "click", function () {
      _hide(_scope._, !0);
    }),
  ),
  _setup$if_content = (_scope) => {
    _setup$if_content_effect(_scope);
  },
  _if_content = _$.createRenderer("<button></button>", " ", _setup$if_content),
  _if = _$.conditional(0, _if_content),
  _hide = _$.state(1, (_scope, hide) => _if(_scope, hide ? 1 : 0));
init();

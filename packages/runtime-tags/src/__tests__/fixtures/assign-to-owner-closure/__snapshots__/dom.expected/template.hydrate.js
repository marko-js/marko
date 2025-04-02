// size: 175 (min) 127 (brotli)
const _setup$if_content = _$.effect("a0", (_scope) =>
    _$.on(_scope[0], "click", function () {
      _hide(_scope._, !0);
    }),
  ),
  _if_content = _$.createRenderer("<button></button>", " ", _setup$if_content),
  _if = _$.conditional(0, _if_content),
  _hide = _$.state(1, (_scope, hide) => _if(_scope, hide ? 1 : 0));
init();

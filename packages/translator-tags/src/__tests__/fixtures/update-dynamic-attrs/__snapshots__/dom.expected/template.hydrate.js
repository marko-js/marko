// size: 101 (min) 66 (brotli)
_$.effect("b", (_scope) => _$.attrsEvents(_scope, 1)),
  _$.effect("c", (_scope) => {
    _$.attrsEvents(_scope, 0), _$.attrsEvents(_scope, 2);
  }),
  init();

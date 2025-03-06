// size: 315 (min) 202 (brotli)
const _i$for_content = _$.value(3, (_scope, i) => _$.data(_scope[1], i)),
  _params_2$for_content = _$.value(2, (_scope, _params_2) =>
    _i$for_content(_scope, _params_2[0]),
  ),
  _num$for_content_effect = _$.effect("a0", (_scope, { _: { 1: num } }) =>
    _$.on(_scope[0], "click", function () {
      _num(_scope._, num + 1);
    }),
  ),
  _num$for_content = _$.loopClosure(1, 0, (_scope, num) =>
    _num$for_content_effect(_scope),
  ),
  _setup$for_content = (_scope) => {
    _num$for_content._(_scope);
  },
  _for_content = _$.createRenderer(
    "<button> </button>",
    " D ",
    _setup$for_content,
    _params_2$for_content,
  ),
  _for = _$.loopTo(0, _for_content),
  _num = _$.state(1, (_scope, num) => {
    _for(_scope, [num, 0, 1]), _num$for_content(_scope);
  });
init();

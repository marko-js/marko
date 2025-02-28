// size: 339 (min) 197 (brotli)
const _setup$if_content2 = (_scope) => {
    _$.data(_scope[0], _scope.$global.x);
  },
  _if_content2 = _$.createRenderer(
    "<span class=hidden> </span>",
    "D ",
    _setup$if_content2,
  ),
  _setup$if_content = (_scope) => {
    _$.data(_scope[0], _scope.$global.x);
  },
  _if_content = _$.createRenderer("<span> </span>", "D ", _setup$if_content),
  _if2 = _$.conditional(1, _if_content2),
  _if = _$.conditional(0, _if_content),
  _show_effect = _$.effect("a0", (_scope, { 3: show }) =>
    _$.on(_scope[2], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(3, (_scope, show) => {
    _if(_scope, show ? 0 : 1), _if2(_scope, show ? 1 : 0), _show_effect(_scope);
  });
init();

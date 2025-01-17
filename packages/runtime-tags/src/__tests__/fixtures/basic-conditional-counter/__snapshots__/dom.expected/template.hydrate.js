// size: 401 (min) 227 (brotli)
const _count$if_content = _$.conditionalClosure(
    2,
    () => _if_content,
    (_scope, count) => _$.data(_scope[0], count),
  ),
  _setup$if_content = (_scope) => {
    _count$if_content._(_scope, _scope._[4]);
  },
  _if_content = _$.register(
    "a0",
    _$.createRenderer("<span> </span>", "D ", _setup$if_content),
  ),
  _if = _$.conditional(2, 0),
  _count_effect = _$.effect("a1", (_scope, { 4: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(4, (_scope, count) => {
    _count_effect(_scope), _count$if_content(_scope, count);
  }),
  _show_effect = _$.effect("a2", (_scope, { 3: show }) =>
    _$.on(_scope[1], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(
    3,
    (_scope, show) => {
      _show_effect(_scope), _if(_scope, show ? _if_content : null);
    },
    () => _if,
  );
init();

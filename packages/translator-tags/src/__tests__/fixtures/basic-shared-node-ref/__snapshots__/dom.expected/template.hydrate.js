// size: 488 (min) 250 (brotli)
const _x$forBody = _$.value(2, (_scope, x) => _$.data(_scope[0], x)),
  _params_2$forBody = _$.value(1, (_scope, _params_2) =>
    _x$forBody(_scope, _params_2[0]),
  ),
  _forBody = _$.register(
    "a0",
    _$.createRenderer(
      "<li> </li>",
      "D ",
      void 0,
      void 0,
      () => _params_2$forBody,
    ),
  ),
  _for = _$.loopOf(0, _forBody),
  _list_effect = _$.effect("a1", (_scope) =>
    _$.on(
      _scope[2],
      "click",
      ((_scope) => {
        const { 4: list } = _scope;
        return function () {
          _list(_scope, [].concat(list).reverse());
        };
      })(_scope),
    ),
  ),
  _list = _$.state(4, (_scope, list) => {
    _list_effect(_scope),
      _for(_scope, [
        list,
        function (x) {
          return x;
        },
      ]);
  }),
  _open_effect = _$.effect("a2", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 3: open } = _scope;
        return function () {
          _open(_scope, !open);
        };
      })(_scope),
    ),
  ),
  _open = _$.state(3, (_scope, open) => {
    _$.attr(_scope[0], "hidden", !open), _open_effect(_scope);
  });
init();

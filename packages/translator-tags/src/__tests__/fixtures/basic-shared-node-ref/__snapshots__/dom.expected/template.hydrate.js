// size: 448 (min) 235 (brotli)
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
  _list_effect = _$.effect("a1", (_scope, { 4: list }) =>
    _$.on(_scope[2], "click", function () {
      _list(_scope, [].concat(list).reverse());
    }),
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
  _open_effect = _$.effect("a2", (_scope, { 3: open }) =>
    _$.on(_scope[1], "click", function () {
      _open(_scope, !open);
    }),
  ),
  _open = _$.state(3, (_scope, open) => {
    _$.attr(_scope[0], "hidden", !open), _open_effect(_scope);
  });
init();

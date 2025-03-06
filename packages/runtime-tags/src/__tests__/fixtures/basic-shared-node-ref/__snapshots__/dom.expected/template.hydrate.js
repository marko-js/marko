// size: 413 (min) 224 (brotli)
const _x$for_content = _$.value(2, (_scope, x) => _$.data(_scope[0], x)),
  _params_2$for_content = _$.value(1, (_scope, _params_2) =>
    _x$for_content(_scope, _params_2[0]),
  ),
  _for_content = _$.createRenderer(
    "<li> </li>",
    "D ",
    0,
    _params_2$for_content,
  ),
  _for = _$.loopOf(0, _for_content),
  _list_effect = _$.effect("a0", (_scope, { 4: list }) =>
    _$.on(_scope[2], "click", function () {
      _list(_scope, [].concat(list).reverse());
    }),
  ),
  _list = _$.state(4, (_scope, list) => {
    _for(_scope, [
      list,
      function (x) {
        return x;
      },
    ]),
      _list_effect(_scope);
  }),
  _open_effect = _$.effect("a1", (_scope, { 3: open }) =>
    _$.on(_scope[1], "click", function () {
      _open(_scope, !open);
    }),
  ),
  _open = _$.state(3, (_scope, open) => {
    _$.attr(_scope[0], "hidden", !open), _open_effect(_scope);
  });
init();

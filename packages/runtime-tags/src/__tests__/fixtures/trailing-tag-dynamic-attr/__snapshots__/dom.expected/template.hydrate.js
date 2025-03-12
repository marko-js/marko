// size: 139 (min) 105 (brotli)
const _toggle_effect = _$.effect("a0", (_scope, { 2: toggle }) =>
    _$.on(_scope[1], "click", function () {
      _toggle(_scope, !toggle);
    }),
  ),
  _toggle = _$.state(2, (_scope, toggle) => {
    _$.attr(_scope[0], "data-toggle", toggle), _toggle_effect(_scope);
  });
init();

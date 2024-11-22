// size: 296 (min) 203 (brotli)
const _xBody = _$.register("b", _$.createRendererWithOwner("Body Content", "")),
  _x_input = _$.dynamicTagAttrs(0, _xBody),
  _dynamicTagName = _$.conditional(
    0,
    (_scope) => _x_input(_scope, () => ({})),
    () => _x_input,
  ),
  _x_effect = _$.effect("c", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 2: x } = _scope;
        return function () {
          _x(_scope, x ? null : "div");
        };
      })(_scope),
    ),
  ),
  _x = _$.state(
    2,
    (_scope, x) => {
      _x_effect(_scope), _dynamicTagName(_scope, x || _xBody(_scope));
    },
    () => _dynamicTagName,
  );
init();

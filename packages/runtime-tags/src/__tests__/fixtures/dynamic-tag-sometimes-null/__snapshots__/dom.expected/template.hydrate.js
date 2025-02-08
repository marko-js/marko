// size: 277 (min) 192 (brotli)
const _x_content = _$.register(
    "a0",
    _$.createRendererWithOwner("Body Content", ""),
  ),
  _x_input = _$.dynamicTagAttrs(0, _x_content),
  _dynamicTag = _$.dynamicTag(
    0,
    (_scope) => _x_input(_scope, () => ({})),
    () => _x_input,
  ),
  _x_effect = _$.effect("a1", (_scope, { 2: x }) =>
    _$.on(_scope[1], "click", function () {
      _x(_scope, x ? null : "div");
    }),
  ),
  _x = _$.state(
    2,
    (_scope, x) => {
      _x_effect(_scope), _dynamicTag(_scope, x || _x_content(_scope));
    },
    () => _dynamicTag,
  );
init();

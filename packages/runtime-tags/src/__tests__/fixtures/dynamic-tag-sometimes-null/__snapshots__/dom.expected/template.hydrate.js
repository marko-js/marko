// size: 219 (min) 156 (brotli)
const _x_content = _$.register(
    "a0",
    _$.createRendererWithOwner("Body Content", ""),
  ),
  _dynamicTag = _$.dynamicTag(0, _x_content),
  _x_effect = _$.effect("a1", (_scope, { 2: x }) =>
    _$.on(_scope[1], "click", function () {
      _x(_scope, x ? null : "div");
    }),
  ),
  _x = _$.state(
    2,
    (_scope, x) => {
      _x_effect(_scope), _dynamicTag(_scope, x);
    },
    () => _dynamicTag,
  );
init();

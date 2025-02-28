// size: 188 (min) 153 (brotli)
const _x_content = _$.registerContent("a0", "Body Content"),
  _dynamicTag = _$.dynamicTag(0, _x_content),
  _x_effect = _$.effect("a1", (_scope, { 2: x }) =>
    _$.on(_scope[1], "click", function () {
      _x(_scope, x ? null : "div");
    }),
  ),
  _x = _$.state(2, (_scope, x) => {
    _dynamicTag(_scope, x), _x_effect(_scope);
  });
init();

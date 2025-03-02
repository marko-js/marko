// size: 141 (min) 112 (brotli)
const _y$define_content_effect = _$.effect("a1", (_scope, { 7: y }) =>
    _$.on(_scope[2], "click", function () {
      _y$define_content(_scope, y + 1);
    }),
  ),
  _y$define_content = _$.state(7, (_scope, y) => {
    _$.data(_scope[1], y),
      _$.data(_scope[3], y),
      _y$define_content_effect(_scope);
  });
init();

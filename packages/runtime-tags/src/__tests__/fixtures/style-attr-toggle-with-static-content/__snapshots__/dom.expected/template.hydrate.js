// size: 158 (min) 136 (brotli)
const $open__script = _._script("a0", ($scope, { 2: open }) =>
    _._on($scope[0], "click", function () {
      $open($scope, (open = !open));
    }),
  ),
  $open = _._let(2, ($scope, open) => {
    (_._attr_style_item($scope[1], "display", open ? void 0 : "none"),
      $open__script($scope));
  });
init();

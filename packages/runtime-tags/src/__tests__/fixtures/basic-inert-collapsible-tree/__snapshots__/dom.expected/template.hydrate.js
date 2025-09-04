// size: 163 (min) 135 (brotli)
const $for_content__open__script = _._script("a0", ($scope, { 12: open }) =>
    _._on($scope[2], "click", function () {
      $for_content__open($scope, (open = !open));
    }),
  ),
  $for_content__open = _._let(12, ($scope, open) => {
    (_._attr($scope[0], "hidden", !open),
      _._text($scope[3], open ? "[-]" : "[+]"),
      $for_content__open__script($scope));
  });
init();

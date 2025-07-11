// size: 158 (min) 143 (brotli)
const $open$for$content_effect = _$.effect("a0", ($scope, { 12: open }) =>
    _$.on($scope[2], "click", function () {
      $open$for$content($scope, !open);
    }),
  ),
  $open$for$content = _$.state(12, ($scope, open) => {
    (_$.attr($scope[0], "hidden", !open),
      _$.data($scope[3], open ? "[-]" : "[+]"),
      $open$for$content_effect($scope));
  });
init();

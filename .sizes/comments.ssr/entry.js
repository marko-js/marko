// size: 145 (min) 128 (brotli)
const $open$for$content_effect = effect("a0", ($scope, { 12: open }) =>
    on($scope[2], "click", function () {
      $open$for$content($scope, !open);
    }),
  ),
  $open$for$content = state(12, ($scope, open) => {
    attr($scope[0], "hidden", !open),
      data($scope[3], open ? "[-]" : "[+]"),
      $open$for$content_effect($scope);
  });
init();

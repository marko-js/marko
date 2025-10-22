// size: 142 (min) 126 (brotli)
const $for_content__open__script = _script("a0", ($scope, { 12: open }) =>
    _on($scope[2], "click", function () {
      $for_content__open($scope, (open = !open));
    }),
  ),
  $for_content__open = _let(12, ($scope, open) => {
    (_attr($scope[0], "hidden", !open),
      _text($scope[3], open ? "[-]" : "[+]"),
      $for_content__open__script($scope));
  });
init();

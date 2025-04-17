// size: 154 (min) 128 (brotli)
const $open_effect = _$.effect("a0", ($scope, { 2: open }) =>
    _$.on($scope[0], "click", function () {
      $open($scope, !open);
    }),
  ),
  $open = _$.state(2, ($scope, open) => {
    _$.styleItem($scope[1], "display", open ? void 0 : "none"),
      $open_effect($scope);
  });
init();

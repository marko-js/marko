// size: 135 (min) 107 (brotli)
const $toggle_effect = _$.effect("a0", ($scope, { 2: toggle }) =>
    _$.on($scope[1], "click", function () {
      $toggle($scope, (toggle = !toggle));
    }),
  ),
  $toggle = _$.state(2, ($scope, toggle) => {
    (_$.attr($scope[0], "data-toggle", toggle), $toggle_effect($scope));
  });
init();

// size: 137 (min) 117 (brotli)
const $toggle__script = _._script("a0", ($scope, { 2: toggle }) =>
    _._on($scope[1], "click", function () {
      $toggle($scope, (toggle = !toggle));
    }),
  ),
  $toggle = _._let(2, ($scope, toggle) => {
    (_._attr($scope[0], "data-toggle", toggle), $toggle__script($scope));
  });
init();

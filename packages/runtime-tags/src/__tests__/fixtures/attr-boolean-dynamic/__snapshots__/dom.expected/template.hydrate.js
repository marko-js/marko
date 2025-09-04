// size: 169 (min) 130 (brotli)
const $disabled__script = _._script("a0", ($scope, { 3: disabled }) =>
    _._on($scope[1], "click", function () {
      $disabled($scope, (disabled = !disabled));
    }),
  ),
  $disabled = _._let(3, ($scope, disabled) => {
    (_._attr($scope[0], "disabled", disabled),
      _._text($scope[2], disabled ? "enable" : "disable"),
      $disabled__script($scope));
  });
init();

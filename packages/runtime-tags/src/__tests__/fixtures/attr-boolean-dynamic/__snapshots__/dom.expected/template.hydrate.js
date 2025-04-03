// size: 170 (min) 132 (brotli)
const $disabled_effect = _$.effect("a0", ($scope, { 3: disabled }) =>
    _$.on($scope[1], "click", function () {
      $disabled($scope, !disabled);
    }),
  ),
  $disabled = _$.state(3, ($scope, disabled) => {
    _$.attr($scope[0], "disabled", disabled),
      _$.data($scope[2], disabled ? "enable" : "disable"),
      $disabled_effect($scope);
  });
init();

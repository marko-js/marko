// size: 170 (min) 132 (brotli)
const _disabled_effect = _$.effect("a0", (_scope, { 3: disabled }) =>
    _$.on(_scope[1], "click", function () {
      _disabled(_scope, !disabled);
    }),
  ),
  _disabled = _$.state(3, (_scope, disabled) => {
    _$.attr(_scope[0], "disabled", disabled),
      _$.data(_scope[2], disabled ? "enable" : "disable"),
      _disabled_effect(_scope);
  });
init();

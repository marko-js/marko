// size: 190 (min) 135 (brotli)
const _disabled_effect = _$.effect("a0", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 3: disabled } = _scope;
        return function () {
          _disabled(_scope, !disabled);
        };
      })(_scope),
    ),
  ),
  _disabled = _$.state(3, (_scope, disabled) => {
    _$.attr(_scope[0], "disabled", disabled),
      _$.data(_scope[2], disabled ? "enable" : "disable"),
      _disabled_effect(_scope);
  });
init();

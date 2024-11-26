// size: 364 (min) 166 (brotli)
const _onMount = (_scope) => {
    const { 1: x } = _scope;
    return function () {
      document.getElementById("ref").textContent = "Mount " + x;
    };
  },
  _onUpdate = (_scope) => {
    const { 1: x } = _scope;
    return function () {
      document.getElementById("ref").textContent = "Update " + x;
    };
  },
  _x_effect = _$.effect("a0", (_scope) => {
    _$.lifecycle(_scope, 3, {
      onMount: _onMount(_scope),
      onUpdate: _onUpdate(_scope),
    }),
      _$.on(
        _scope[0],
        "click",
        ((_scope) => {
          const { 1: x } = _scope;
          return function () {
            _x(_scope, x + 1);
          };
        })(_scope),
      );
  }),
  _x = _$.state(1, (_scope, x) => _x_effect(_scope));
init();

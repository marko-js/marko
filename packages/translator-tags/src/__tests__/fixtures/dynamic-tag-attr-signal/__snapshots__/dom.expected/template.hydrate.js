// size: 163 (min) 125 (brotli)
const _className_effect = _$.effect("a0", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 2: className } = _scope;
        return function () {
          _className(_scope, "A" === className ? "B" : "A");
        };
      })(_scope),
    ),
  ),
  _className = _$.state(2, (_scope, className) => {
    _$.classAttr(_scope[0], className), _className_effect(_scope);
  });
init();
